import { IaModel } from "../models/ia.js";

export class IaController {
    static async message(req, res) {
        const message = await IaModel.message(req.body);

        res.json({
            kosmos: message,
        });
    }
}