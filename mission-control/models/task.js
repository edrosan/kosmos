import { archivePage } from "../functions/archivePage.js";
import { createDay } from "../functions/createDay.js";
import { dataDay } from "../functions/dataDay.js";
import { env } from "../functions/env.js";
import { findPage } from "../functions/findPage.js";
import { query } from "../functions/query.js";
import { updateTask } from "../functions/updateTask.js";

export class TaskModel {
    static async getSunday() {
        const day = env("SUNDAY_TABLE");
        const response = await query({ tableId: day });
        const tasks = dataDay(response);
        return tasks;
    }

    static async getMonday() {
        const day = env("MONDAY_TABLE");
        const response = await query({ tableId: day });
        const tasks = dataDay(response);
        return tasks;
    }

    static async getTuesday() {
        const day = env("TUESDAY_TABLE");
        const response = await query({ tableId: day });
        const tasks = dataDay(response);
        return tasks;
    }

    static async getWednesday() {
        const day = env("WEDNESDAY_TABLE");
        const response = await query({ tableId: day });
        const tasks = dataDay(response);
        return tasks;
    }

    static async getThursday() {
        const day = env("THURSDAY_TABLE");
        const response = await query({ tableId: day });
        const tasks = dataDay(response);
        return tasks;
    }

    static async getFriday() {
        const day = env("FRIDAY_TABLE");
        const response = await query({ tableId: day });
        const tasks = dataDay(response);
        return tasks;
    }

    static async getSaturday(body) {
        const day = env("SATURDAY_TABLE");
        const response = await query({ tableId: day });
        const tasks = dataDay(response);
        return tasks;
    }

    static async setSunday(body) {
        const day = env("SUNDAY_TABLE");
        const response = await createDay({ table: day, body: body });

        return response;
    }

    static async setMonday(body) {
        const day = env("MONDAY_TABLE");
        const response = await createDay({ table: day, body: body });

        return response;
    }

    static async setTuesday(body) {
        const day = env("TUESDAY_TABLE");
        const response = await createDay({ table: day, body: body });

        return response;
    }

    static async setWednesday(body) {
        const day = env("WEDNESDAY_TABLE");
        const response = await createDay({ table: day, body: body });

        return response;
    }

    static async setThursday(body) {
        const day = env("THURSDAY_TABLE");
        const response = await createDay({ table: day, body: body });

        return response;
    }

    static async setFriday(body) {
        const day = env("FRIDAY_TABLE");
        const response = await createDay({ table: day, body: body });

        return response;
    }

    static async setSaturday(body) {
        const day = env("SATURDAY_TABLE");
        const response = await createDay({ table: day, body: body });

        return response;
    }



    static async patchSunday(body) {
        const idTable = env("SUNDAY_TABLE");

        const { page, element } = await findPage({ table: idTable, body: body });


        const response = await updateTask({ page, body, element });

        return response;
    }

    static async patchMonday(body) {
        const idTable = env("MONDAY_TABLE");

        const { page, element } = await findPage({ table: idTable, body: body });


        const response = await updateTask({ page, body, element });

        return response;
    }

    static async patchTuesday(body) {
        const idTable = env("TUESDAY_TABLE");

        const { page, element } = await findPage({ table: idTable, body: body });


        const response = await updateTask({ page, body, element });

        return response;
    }

    static async patchWednesday(body) {
        const idTable = env("WEDNESDAY_TABLE");

        const { page, element } = await findPage({ table: idTable, body: body });


        const response = await updateTask({ page, body, element });

        return response;
    }

    static async patchThursday(body) {
        const idTable = env("THURSDAY_TABLE");

        const { page, element } = await findPage({ table: idTable, body: body });


        const response = await updateTask({ page, body, element });

        return response;
    }

    static async patchFriday(body) {
        const idTable = env("FRIDAY_TABLE");

        const { page, element } = await findPage({ table: idTable, body: body });


        const response = await updateTask({ page, body, element });

        return response;
    }

    static async patchSaturday(body) {
        const idTable = env("SATURDAY_TABLE");

        const { page, element } = await findPage({ table: idTable, body: body });


        const response = await updateTask({ page, body, element });

        return response;
    }

    static async deleteSunday(body) {
        const idTable = env("SUNDAY_TABLE");

        const { page, element } = await findPage({ table: idTable, body: body });

        const response = await archivePage({ id: page });

        return response;
    }
}