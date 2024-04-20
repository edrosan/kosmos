import { newGemini } from "../functions/gemini.js";


export class IaModel {
    static async message(body) {

        const gemini = newGemini

        const model = gemini.getGenerativeModel({ model: "gemini-pro" });

        const prompt = body.message;

        const result = await model.generateContent(prompt);

        const response = await result.response;
        const text = response.text();

        return text;
    }
}