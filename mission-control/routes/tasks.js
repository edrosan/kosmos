import { Router } from "express";
import { TasksController } from "../controllers/tasks.js";

export const tasksRouter = Router();

tasksRouter.get('/sunday', TasksController.getSunday);
tasksRouter.get('/monday', TasksController.getMonday);
tasksRouter.get('/tuesday', TasksController.getTuesday);
tasksRouter.get('/wednesday', TasksController.getWednesday);
tasksRouter.get('/thursday', TasksController.getThursday);
tasksRouter.get('/friday', TasksController.getFriday);
tasksRouter.get('/saturday', TasksController.getSaturday);

tasksRouter.post('/sunday', TasksController.setSunday);
tasksRouter.post('/monday', TasksController.setMonday);
tasksRouter.post('/tuesday', TasksController.setTuesday);
tasksRouter.post('/wednesday', TasksController.setWednesday);
tasksRouter.post('/thursday', TasksController.setThursday);
tasksRouter.post('/friday', TasksController.setFriday);
tasksRouter.post('/saturday', TasksController.setSaturday);


tasksRouter.patch('/sunday', TasksController.patchSunday);
tasksRouter.patch('/monday', TasksController.patchMonday);
tasksRouter.patch('/tuesday', TasksController.patchTuesday);
tasksRouter.patch('/wednesday', TasksController.patchWednesday);
tasksRouter.patch('/thursday', TasksController.patchThursday);
tasksRouter.patch('/friday', TasksController.patchFriday);
tasksRouter.patch('/saturday', TasksController.patchSaturday);

tasksRouter.delete('/sunday', TasksController.deleteSunday);