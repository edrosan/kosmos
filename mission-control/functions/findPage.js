import { query } from "./query.js";

export const findPage = async ({table, body}) => {
    const elements = await query({ tableId: table});

    const results = elements?.results

    const element = results.find((result) => {
      return result.properties.id.title[0].text.content === body?.id;
    }) || {};

    const page = element?.id || null;

   return  {page, element};
}
