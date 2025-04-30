import { GoogleSpreadsheet, GoogleSpreadsheetWorksheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";

const SHEET_ID = process.env.GOOGLE_SHEET_ID;
const SHEET_NAME = "accueil";
const GOOGLE_CLIENT_EMAIL = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
const GOOGLE_PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");

if (!SHEET_ID || !GOOGLE_CLIENT_EMAIL || !GOOGLE_PRIVATE_KEY) {
  throw new Error("Missing required environment variables for Google Sheets");
}

// Assertion de type pour TypeScript
const clientEmail = GOOGLE_CLIENT_EMAIL as string;
const privateKey = GOOGLE_PRIVATE_KEY as string;
const sheetId = SHEET_ID as string;

export type FormData = {
  nom?: string;
  email: string;
  telephone: string;
  codePostal: string;
  prestation: string;
  message?: string;
  source?: string;
};

export async function appendToSheet(data: FormData) {
  try {
    const auth = new JWT({
      email: clientEmail,
      key: privateKey,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"]
    });

    const doc = new GoogleSpreadsheet(sheetId, auth);
    await doc.loadInfo();

    // Chercher ou créer la feuille "accueil"
    let sheet = doc.sheetsByTitle[SHEET_NAME] as GoogleSpreadsheetWorksheet;
    if (!sheet) {
      sheet = await doc.addSheet({ title: SHEET_NAME }) as GoogleSpreadsheetWorksheet;
    }

    // Définir les en-têtes si la feuille est vide
    const headers = [
      "Date",
      "Nom",
      "Email",
      "Téléphone",
      "Code Postal",
      "Prestation",
      "Message",
      "Source",
    ];

    const rows = await sheet.getRows();
    if (rows.length === 0) {
      await sheet.setHeaderRow(headers);
    }

    // Ajouter la nouvelle ligne
    await sheet.addRow({
      Date: new Date().toLocaleString("fr-FR", { timeZone: "Europe/Paris" }),
      Nom: data.nom || "",
      Email: data.email,
      Téléphone: data.telephone,
      "Code Postal": data.codePostal,
      Prestation: data.prestation,
      Message: data.message || "",
      Source: data.source || "Site Web",
    });

    return { success: true };
  } catch (error) {
    console.error("Erreur lors de l'ajout à Google Sheets:", error);
    return { success: false, error };
  }
}
