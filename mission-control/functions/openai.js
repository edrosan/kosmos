import OpenAI from "openai.js";
import { env } from "./env.js";


export const openai = new OpenAI({apiKey: env("OPENAI_API_KEY")});
