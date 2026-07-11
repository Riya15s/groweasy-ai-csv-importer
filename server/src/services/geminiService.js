const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

async function extractCRMData(records) {
  try {
    console.log("🤖 Using Gemini model...");

    const prompt = `
You are a CRM data extraction AI.

Convert the following CSV records into GrowEasy CRM format.

Return ONLY a valid JSON array.

Required fields:
created_at
name
email
country_code
mobile_without_country_code
company
city
state
country
lead_owner
crm_status
crm_note
data_source
possession_time
description

Rules:
- Skip records that have neither email nor mobile.
- crm_status must be one of:
  GOOD_LEAD_FOLLOW_UP
  DID_NOT_CONNECT
  BAD_LEAD
  SALE_DONE
- Return ONLY JSON. No markdown. No explanation.

CSV Records:
${JSON.stringify(records)}
`;

    const response = await ai.models.generateContent({
   model: "gemini-2.0-flash",
      contents: prompt,
    });

    console.log("✅ Gemini API Success");
    console.log("Raw Response:");
    console.dir(response, { depth: null });

    const text =
      response.text ||
      response.candidates?.[0]?.content?.parts?.[0]?.text ||
      "";

    console.log("AI Text:");
    console.log(text);

    return JSON.parse(text);

  } catch (error) {
    console.log("\n========== GEMINI ERROR ==========");

    console.error("Message:", error.message);
    console.error("Status:", error.status);

    console.dir(error, { depth: null });

    throw error;
  }
}

module.exports = {
  extractCRMData,
};