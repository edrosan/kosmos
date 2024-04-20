import { update } from "./update.js"

export const archivePage = async ({id}) => {
    const response = await update({id, properties:null, archived: true})

    return response;
}