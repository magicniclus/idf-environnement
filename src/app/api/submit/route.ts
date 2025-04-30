/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import { google } from "googleapis";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    console.log("Données reçues:", data);

    // Vérifier les variables d'environnement
    console.log("Email:", process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL);
    console.log("Sheet ID:", process.env.GOOGLE_SHEET_ID);

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
    console.error("Erreur lors de la soumission du formulaire:", error);
    const errorMessage =
      error.message || "Erreur lors du traitement de la requête";
    return NextResponse.json(
      { error: errorMessage },
      { status: error.status || 500 }
    );
  }
}
