import { google } from "googleapis";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  console.log('Début de la requête POST');
  try {
    // Vérifier les variables d'environnement requises
    const requiredEnvVars = {
      GOOGLE_SERVICE_ACCOUNT_EMAIL: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      GOOGLE_PRIVATE_KEY: process.env.GOOGLE_PRIVATE_KEY,
      GOOGLE_SHEET_ID: process.env.GOOGLE_SHEET_ID
    };

    console.log('Vérification des variables d\'environnement:', {
      hasEmail: !!requiredEnvVars.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      hasKey: !!requiredEnvVars.GOOGLE_PRIVATE_KEY,
      hasSheetId: !!requiredEnvVars.GOOGLE_SHEET_ID
    });

    Object.entries(requiredEnvVars).forEach(([name, value]) => {
      if (!value) {
        console.error(`Variable d'environnement manquante: ${name}`);
        throw new Error(`${name} non configuré`);
      }
    });

    const data = await request.json();
    console.log("Données reçues du formulaire:", {
      ...data,
      email: data.email ? '***@***' : undefined // Masquer l'email pour la sécurité
    });

    console.log("Variables d'environnement présentes:", {
      hasEmail: !!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      hasKey: !!process.env.GOOGLE_PRIVATE_KEY,
      hasSheetId: !!process.env.GOOGLE_SHEET_ID,
    });

    // Vérifier le format de la clé privée
    const privateKeyInfo = {
      hasKey: !!process.env.GOOGLE_PRIVATE_KEY,
      keyLength: process.env.GOOGLE_PRIVATE_KEY?.length || 0,
      startsWithHeader: process.env.GOOGLE_PRIVATE_KEY?.includes("-----BEGIN PRIVATE KEY-----") || false,
      endsWithFooter: process.env.GOOGLE_PRIVATE_KEY?.includes("-----END PRIVATE KEY-----") || false,
      containsNewlines: process.env.GOOGLE_PRIVATE_KEY?.includes('\n') || false,
      isWrappedInQuotes: process.env.GOOGLE_PRIVATE_KEY?.startsWith('"') && process.env.GOOGLE_PRIVATE_KEY?.endsWith('"') || false
    };
    
    console.log("Format de la clé privée:", privateKeyInfo);
    
    if (!privateKeyInfo.startsWithHeader || !privateKeyInfo.endsWithFooter) {
      console.error('Problème avec le format de la clé privée:', privateKeyInfo);
      throw new Error('Format de clé privée invalide - Vérifiez le format dans les variables d\'environnement');
    }

    // Nettoyer et formater la clé privée
    // La clé privée est déjà vérifiée comme non-null plus haut
    const privateKey = process.env.GOOGLE_PRIVATE_KEY!;

    console.log("Clé privée formatée:", {
      length: privateKey.length,
      hasHeader: privateKey.includes("-----BEGIN PRIVATE KEY-----"),
      hasFooter: privateKey.includes("-----END PRIVATE KEY-----"),
      firstChars: privateKey.substring(0, 30) + "...",
      lastChars: "..." + privateKey.substring(privateKey.length - 30),
    });

    if (
      !privateKey.includes("-----BEGIN PRIVATE KEY-----") ||
      !privateKey.includes("-----END PRIVATE KEY-----")
    ) {
      throw new Error(
        "Format de clé privée invalide - Vérifiez le format dans les variables d'environnement"
      );
    }

    // Configurer l'authentification
    let auth;
    try {
      const credentials = {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: privateKey,
      };

      console.log('Tentative d\'authentification avec:', {
        hasClientEmail: !!credentials.client_email,
        hasPrivateKey: !!credentials.private_key,
        scopes: ["https://www.googleapis.com/auth/spreadsheets"]
      });

      auth = new google.auth.GoogleAuth({
        credentials,
        scopes: ["https://www.googleapis.com/auth/spreadsheets"],
      });

      // Vérifier que l'authentification fonctionne
      await auth.getClient();
      console.log('Authentification réussie');

    } catch (error) {
      console.error("Erreur d\'authentification détaillée:", {
        message: error instanceof Error ? error.message : 'Erreur inconnue',
        stack: error instanceof Error ? error.stack : undefined,
        name: error instanceof Error ? error.name : undefined
      });
      throw new Error(`Erreur d'authentification Google: ${error instanceof Error ? error.message : "Erreur inconnue"}`);
    }

    const sheets = google.sheets({ version: "v4", auth });
    console.log("Auth configurée");

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

    // Récupérer la liste des feuilles
    const spreadsheet = await sheets.spreadsheets.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
    });

    // Vérifier si la feuille Accueil existe
    const accueilSheet = spreadsheet.data.sheets?.find(
      (sheet) => sheet.properties?.title === "Accueil"
    );

    // Si la feuille n'existe pas, la créer
    if (!accueilSheet) {
      console.log("La feuille Accueil n'existe pas, création...");
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

      // Ajouter les en-têtes immédiatement après la création
      await sheets.spreadsheets.values.update({
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
    } else {
      // Vérifier si les en-têtes existent
      try {
        const headers = await sheets.spreadsheets.values.get({
          spreadsheetId: process.env.GOOGLE_SHEET_ID,
          range: "Accueil!A1:H1",
        });

        if (!headers.data.values || headers.data.values.length === 0) {
          // Ajouter les en-têtes si elles n'existent pas
          await sheets.spreadsheets.values.update({
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
      } catch (error) {
        console.error("Erreur lors de la vérification des en-têtes:", error);
        // Continue même si la vérification des en-têtes échoue
      }
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
  } catch (error) {
    console.error("Erreur détaillée lors du traitement de la requête:", {
      name: error instanceof Error ? error.name : 'Unknown',
      message: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
      type: typeof error
    });

    let statusCode = 500;
    let errorMessage = error instanceof Error ? error.message : "Erreur inconnue";

    // Détecter les erreurs spécifiques
    if (error instanceof Error) {
      if (error.message.includes('credentials')) {
        statusCode = 401;
        errorMessage = "Erreur d'authentification avec Google Sheets";
      } else if (error.message.includes('GOOGLE_')) {
        statusCode = 500;
        errorMessage = "Erreur de configuration du serveur";
      }
    }

    return new NextResponse(
      JSON.stringify({
        success: false,
        error: errorMessage,
        timestamp: new Date().toISOString(),
      }),
      {
        status: statusCode,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }
}
