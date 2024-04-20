import { create } from "./create.js";

export const createDay = async ({table,body}) => {
    const response = await create({
        id: table,
        properties: {
          id: {
            title: [
              {
                text: {
                  content: body.id,
                },
              },
            ],
          },
          usuario: {
            rich_text: [
              {
                text: {
                  content: body?.usuario,
                },
              },
            ],
          },
          tarea: {
            rich_text: [
              {
                text: {
                  content: body?.tarea,
                },
              },
            ],
          },
          completado: {
            rich_text: [
              {
                text: {
                  content: body?.completado,
                },
              },
            ],
          },
          hora: {
            rich_text: [
              {
                text: {
                  content: body?.hora,
                },
              },
            ],
          },
          duracion: {
            rich_text: [
              {
                text: {
                  content: body?.duracion,
                },
              },
            ],
          },
        },
      })

    return response;
}