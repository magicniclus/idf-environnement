import { Client } from '@hubspot/api-client';

const hubspotClient = new Client({ accessToken: process.env.HUBSPOT_API_KEY });

export const createContact = async (data: {
  firstname?: string;
  lastname: string;
  email: string;
  phone: string;
  zip: string;
  travaux: string;
  source: string;
}) => {
  try {
    const properties = {
      firstname: data.firstname || '',
      lastname: data.lastname,
      email: data.email,
      phone: data.phone,
      zip: data.zip,
      travaux: data.travaux,
      hs_lead_status: 'NEW',
      source_du_lead: 'idf-environnement.fr',
    };

    const response = await hubspotClient.crm.contacts.basicApi.create({ properties });
    return response;
  } catch (error) {
    console.error('Error creating contact in HubSpot:', error);
    throw error;
  }
};
