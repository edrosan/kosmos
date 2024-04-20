export const dataDay =  (response) => {
    const properties = response?.results?.map((result) => {
        return result?.properties;
      });

    const tasks = properties?.map((property) => {
        const id = property?.id?.title[0]?.text?.content;
        const usuario = property?.usuario?.rich_text[0]?.text?.content;
        const tarea = property?.tarea?.rich_text[0]?.text?.content;
        const completado = property?.completado?.rich_text[0]?.text?.content;
        const duracion = property?.duracion?.rich_text[0]?.text?.content;
        const hora = property?.hora?.rich_text[0]?.text?.content;
  
        return { id, usuario, tarea, completado, duracion, hora}
      })

      return tasks;
}