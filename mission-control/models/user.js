import { create } from "../functions/create.js";
import { env } from "../functions/env.js";
import { query } from "../functions/query.js";
import { update } from "../functions/update.js";


export class UserModel {
  static async getUsers() {
    const response = await query({ tableId: env("USERS_TABLE") });

    const properties = response?.results?.map((result) => {
      return result?.properties;
    });

    const users = properties?.map((property) => {
      const id = property?.id?.title[0]?.text?.content;
      const email = property?.email?.rich_text[0]?.text?.content;
      const name = property?.name?.rich_text[0]?.text?.content;

      return { id, email, name }
    })

    return users;
  }

  static async auth(body) {
    const users = await query({ tableId: env("USERS_TABLE") });

    const results = users?.results

    const user = results.find((result) => {
      const email = result?.properties?.email?.rich_text[0]?.text.content;
      const password = result?.properties?.password?.rich_text[0]?.text.content;

      return email === body?.email && password === body?.password;
    }) || null;

    const userId = user?.properties?.id?.title[0]?.text?.content || null;
    
    return userId;
  }

  static async createUser(body) {
    const id = crypto.randomUUID();


    const response = await create({
      id: env("USERS_TABLE"),
      properties: {
        id: {
          title: [
            {
              text: {
                content: id,
              },
            },
          ],
        },
        email: {
          rich_text: [
            {
              text: {
                content: body?.email,
              },
            },
          ],
        },
        name: {
          rich_text: [
            {
              text: {
                content: body?.name,
              },
            },
          ],
        },
        password: {
          rich_text: [
            {
              text: {
                content: body?.password,
              },
            },
          ],
        },
      },
    })

    return response;
  }

  static async updateUser(body) {
    const users = await query({ tableId: env("USERS_TABLE") });

    const results = users?.results

    const user = results.find((result) => {
      return result.properties.id.title[0].text.content === body?.id;
    }) || {};

    const page = user?.id || null;

    if (!page) {
      return {
        success: false,
        response:  null,
      };
    }

    const response = await update({
      pageId: page, 
      properties: {
        "name": {
          "rich_text": [
            {
              "text": {
                "content": body?.name || user?.properties?.name?.rich_text[0]?.text?.content,
              }
            }
          ]
        },
        "email": {
          "rich_text": [
            {
              "text": {
                "content": body?.email || user?.properties?.email?.rich_text[0]?.text?.content,
              }
            }
          ]
        },
      },
    })

    return {
      success: true,
      response: response?.id || null,
    };
  }
}