import { update } from "./update.js"

export const updateTask = async ({page, body, element}) => {
    const response = await update({
        pageId: page, 
        properties: {
          "usuario": {
            "rich_text": [
              {
                "text": {
                  "content": body?.usuario || element?.properties?.usuario?.rich_text[0]?.text?.content,
                }
              }
            ]
          },
          "tarea": {
            "rich_text": [
              {
                "text": {
                  "content": body?.tarea || element?.properties?.tarea?.rich_text[0]?.text?.content,
                }
              }
            ]
          },
          "completado": {
            "rich_text": [
              {
                "text": {
                  "content": body?.completado || element?.properties?.completado?.rich_text[0]?.text?.content,
                }
              }
            ]
          },
          "hora": {
            "rich_text": [
              {
                "text": {
                  "content": body?.hora || element?.properties?.hora?.rich_text[0]?.text?.content,
                }
              }
            ]
          },
          "duracion": {
            "rich_text": [
              {
                "text": {
                  "content": body?.duracion || element?.properties?.duracion?.rich_text[0]?.text?.content,
                }
              }
            ]
          },
        },
      })


      return response?.id || null
}