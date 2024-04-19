import { notion } from "../functions/notion.js";

export const query = async ({ tableId }) => {
  const response = await notion.databases.query({
    database_id: tableId,
  })

  return response;
}

