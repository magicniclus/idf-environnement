/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import { google } from "googleapis";

export async function POST(request: Request) {
  try {
    // Vérifier les variables d'environnement requises
    if (!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL) {
      throw new Error("GOOGLE_SERVICE_ACCOUNT_EMAIL non configuré");
    }
    if (!process.env.GOOGLE_PRIVATE_KEY) {
      throw new Error("GOOGLE_PRIVATE_KEY non configuré");
    }
    if (!process.env.GOOGLE_SHEET_ID) {
      throw new Error("GOOGLE_SHEET_ID non configuré");
    }

    const data = await request.json();
    console.log("Données reçues:", data);

    console.log("Variables d'environnement présentes:", {
      hasEmail: !!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      hasKey: !!process.env.GOOGLE_PRIVATE_KEY,
      hasSheetId: !!process.env.GOOGLE_SHEET_ID
    });

    // Configurer l'authentification
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });
    console.log("Auth configurée");

    // Vérifier si la feuille Accueil existe
    try {
      await sheets.spreadsheets.get({
        spreadsheetId: process.env.GOOGLE_SHEET_ID,
        ranges: ["Accueil!A1:A1"],
      });
    } catch (error: any) {
      if (error.code === 404) {
        console.log("La feuille Accueil n'existe pas, création...");
        // Si la feuille n'existe pas, la créer
        await sheets.spreadsheets.batchUpdate({
          spreadsheetId: process.env.GOOGLE_SHEET_ID,
          requestBody: {
            requests: [
              {
                addSheet: {
                  properties: {
                    title: "Accueil",
                  },
                },
              },
            ],
          },
        });
      }
    }

    // Préparer les données
    const values = [
      [
        new Date().toLocaleString("fr-FR", { timeZone: "Europe/Paris" }),
        data.prenom || "",
        data.nom || "",
        data.email || "",
        data.telephone || "",
        data.codePostal || "",
        data.prestation || "",
        data.source || "Site Web",
      ],
    ];

    console.log("Tentative d'ajout des données...");
    // Vérifier si les en-têtes existent
    const headers = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Accueil!A1:H1",
    });

    if (!headers.data.values || headers.data.values.length === 0) {
      // Ajouter les en-têtes si elles n'existent pas
      await sheets.spreadsheets.values.append({
        spreadsheetId: process.env.GOOGLE_SHEET_ID,
        range: "Accueil!A1:H1",
        valueInputOption: "USER_ENTERED",
        requestBody: {
          values: [
            [
              "Date",
              "Prénom",
              "Nom",
              "Email",
              "Téléphone",
              "Code Postal",
              "Prestation",
              "Source",
            ],
          ],
        },
      });
    }

    // Ajouter les données à la feuille
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Accueil!A:H",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values,
      },
    });
    console.log("Réponse de l'API:", response.status);

    if (response.status !== 200) {
      throw new Error("Erreur lors de l'ajout des données");
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Erreur détaillée:", {
      message: error.message,
      stack: error.stack,
      name: error.name
    });
    
    const errorMessage = error.message || "Erreur lors du traitement de la requête";
    return NextResponse.json(
      { 
        error: errorMessage,
        details: error.stack
      },
      { status: error.status || 500 }
    );
  }
}
