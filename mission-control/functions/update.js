import { notion } from "../functions/notion.js";

export const update = async ({ pageId, properties, ...props }) => {
  const response = await notion.pages.update({
    page_id: pageId,
    properties: properties,
    ...props,
  })

  return response;
}
