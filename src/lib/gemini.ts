import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.GEMINI_API_KEY;

export const ai = new GoogleGenAI({ apiKey: apiKey || "" });

export async function askVoteSmart(prompt: string) {
  if (!apiKey) throw new Error("GEMINI_API_KEY is not defined");

  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
    config: {
      systemInstruction: `You are VoteSmart AI, a policy strategist and civic-tech expert. 
      Your goal is to educate users on election processes, verify election-related news, and provide data-driven insights on candidates.
      Keep answers structured, neutral, and easy to understand. 
      Use simple language but deep insights. 
      When verifying news, provide a 'Likely True', 'Likely False', or 'Unverified' verdict with reasoning.`,
    },
  });

  return response.text;
}

export async function verifyNews(news: string) {
  const prompt = `Analyze the following election-related claim for potential misinformation or fake news. 
  Provide a verdict (Likely True, Likely False, Highly Likely False, or Unverified) and a brief point-by-point reasoning.
  
  Claim: "${news}"`;

  return askVoteSmart(prompt);
}
