import { Router } from "express";
import { UserModel } from "../models/user.js";
import { notion } from "../functions/notion.js";
import { env } from "../functions/env.js";

const userModal = new UserModel(notion);

export const daysRouter = Router();

daysRouter.get('/', async (req, res) => {
  const kosmos = "Hello World";

  res.json({
    message: 'Days',
    kosmos: kosmos,
  });
});

daysRouter.get('/:day', async (req, res) => {
  const kosmos = "Hello World";

  const { day } = req.params;

  const days = {
    monday: { name: 'Monday', id: env('MONDAY_TABLE') },
    tuesday: 'Tuesday',
    wednesday: 'Wednesday',
    thursday: 'Thursday',
    friday: 'Friday',
    saturday: 'Saturday',
    sunday: 'Sunday',
  }

  res.json({
    message: days[day] || 'Not found',
    kosmos: kosmos,
  });
});


