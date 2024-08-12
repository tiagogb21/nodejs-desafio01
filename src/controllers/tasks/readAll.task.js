import { database } from "../../database/index.js";

export const readAll = (req, res) => {
    const tasks = database.select('tasks');

    return res
        .end(JSON.stringify(tasks))
}
