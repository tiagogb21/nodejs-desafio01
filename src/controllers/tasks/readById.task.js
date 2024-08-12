import { database } from "../../database/index.js";

export const readById = (req, res) => {
    const tasks = database.select('tasks');

    return res
        .end(JSON.stringify(tasks))
}
