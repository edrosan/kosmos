import { GoogleGenerativeAI } from "@google/generative-ai";
import { env } from "./env.js";


export const newGemini = new GoogleGenerativeAI(env('GEMINI_API_KEY'));

