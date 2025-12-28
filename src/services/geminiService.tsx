
// import { GoogleGenAI, Type } from "@google/genai";
// import type { Subscription } from "../types";

// export const getBudgetInsights = async (subscriptions: Subscription[]) => {
//     if (subscriptions.length === 0) return null;

//     const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
//     const subData = subscriptions.map(s => `${s.appName}: $${s.amount} (${s.subscriptionType})`).join(', ');
    
//     const prompt = `Based on these user subscriptions: ${subData}. 
//     Provide a brief summary of spending and 3 practical tips to save money or optimize these subscriptions. 
//     Respond in JSON format.`;

//     try {
//         const response = await ai.models.generateContent({
//         model: "gemini-3-flash-preview",
//         contents: prompt,
//         config: {
//             responseMimeType: "application/json",
//             responseSchema: {
//             type: Type.OBJECT,
//             properties: {
//                 summary: { type: Type.STRING },
//                 tips: {
//                 type: Type.ARRAY,
//                 items: { type: Type.STRING }
//                 }
//             },
//             required: ["summary", "tips"]
//             }
//         }
//         });

//         return JSON.parse(response.text);
//     } catch (error) {
//         console.error("Gemini Insight Error:", error);
//         return null;
//     }
// };
