import { notion } from "../functions/notion.js";

export const update = async ({ pageId, properties }) => {
  const response = await notion.pages.update({
    page_id: pageId,
    properties: properties,
  })

  return response;
}
