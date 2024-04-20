import { env } from "./env.js";
import { Client } from '@notionhq/client';

const INTEGRATION_TOKEN = env('INTEGRATION_TOKEN');

export const notion = new Client({ auth: INTEGRATION_TOKEN });