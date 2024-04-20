import { TaskModel } from "../models/task.js";

export class TasksController {
    static async getSunday(req, res) {
        const response = await TaskModel.getSunday();


        res.json({
            message: 'Tasks',
            kosmos: response,
        });
    }

    static async getMonday(req, res) {
        const response = await TaskModel.getMonday();
        res.json({
            message: 'Tasks',
            kosmos: response,
        });
    }

    static async getTuesday(req, res) {
        const response = await TaskModel.getTuesday();
        res.json({
            message: 'Tasks',
            kosmos: response,
        });
    }

    static async getWednesday(req, res) {
        const response = await TaskModel.getWednesday(req.body);
        res.json({
            message: 'Tasks',
            kosmos: response,
        });
    }

    static async getThursday(req, res) {
        const response = await TaskModel.getThursday(req.body);
        res.json({
            message: 'Tasks',
            kosmos: response,
        });
    }

    static async getFriday(req, res) {
        const response = await TaskModel.getFriday(req.body);
        res.json({
            message: 'Tasks',
            kosmos: response,
        });
    }

    static async getSaturday(req, res) {
        const response = await TaskModel.getSaturday(req.body);
        res.json({
            message: 'Tasks',
            kosmos: response,
        });
    }

    static async setSunday(req, res) {
        const response = await TaskModel.setSunday(req.body);
        res.json({
            message: 'Tasks',
            kosmos: response,
        });
    }

    static async setMonday(req, res) {
        const response = await TaskModel.setMonday(req.body);

        res.json({
            message: 'Tasks',
            kosmos: response,
        });
    }

    static async setTuesday(req, res) {
        const response = await TaskModel.setTuesday(req.body);
        res.json({
            message: 'Tasks',
            kosmos: response,
        });
    }

    static async setWednesday(req, res) {
        const response = await TaskModel.setWednesday(req.body);
        res.json({
            message: 'Tasks',
            kosmos: response,
        });
    }

    static async setThursday(req, res) {
        const response = await TaskModel.setThursday(req.body);
        res.json({
            message: 'Tasks',
            kosmos: response,
        });
    }

    static async setFriday(req, res) {
        const response = await TaskModel.setFriday(req.body);
        res.json({
            message: 'Tasks',
            kosmos: response,
        });
    }

    static async setSaturday(req, res) {
        const response = await TaskModel.setSaturday(req.body);
        res.json({
            message: 'Tasks',
            kosmos: response,
        });
    }

    static async patchSunday(req, res) {
        const response = await TaskModel.patchSunday(req.body);

        res.json({
            message: 'Tasks',
            kosmos: response,
        });
    }

    static async patchMonday(req, res) {
        const response = await TaskModel.patchMonday(req.body);
        res.json({
            message: 'Tasks',
            kosmos: response,
        });
    }

    static async patchTuesday(req, res) {
        const response = await TaskModel.patchTuesday(req.body);
        res.json({
            message: 'Tasks',
            kosmos: response,
        });
    }

    static async patchWednesday(req, res) {
        const response = await TaskModel.patchWednesday(req.body);
        res.json({
            message: 'Tasks',
            kosmos: response,
        });
    }

    static async patchThursday(req, res) {
        const response = await TaskModel.patchThursday(req.body);
        res.json({
            message: 'Tasks',
            kosmos: response,
        });
    }

    static async patchFriday(req, res) {
        const response = await TaskModel.patchFriday(req.body);
        res.json({
            message: 'Tasks',
            kosmos: response,
        });
    }

    static async patchSaturday(req, res) {
        const response = await TaskModel.patchSaturday(req.body);
        res.json({
            message: 'Tasks',
            kosmos: response,
        });
    }

    static async deleteSunday(req, res) {
        const response = await TaskModel.deleteSunday(req.body);
        
        res.json({
            message: 'Tasks',
            kosmos: response,
        });
    }
}