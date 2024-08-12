import { database } from "../../database/index.js";

export const del = (req, res) => {
    const tasks = database.select('tasks');

    return res
        .end(JSON.stringify(tasks))
}
