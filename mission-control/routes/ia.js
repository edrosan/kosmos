import { Router } from "express";
import { IaController } from "../controllers/ia.js";

export const iaRouter = Router();

iaRouter.post('/', IaController.message);
