import { notion } from "../functions/notion.js";

export const create = async ({id, properties}) => {
  const response = await notion.pages.create({
    parent: {
      database_id: id,
    },
    properties: properties,
  });

  return response;
} 

