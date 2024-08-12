import { database } from "../../database/index.js";

export const create = (req, res) => {
    const { title, description } = req.body;

    const task = {
        id: new randomUUID(),
        title,
        description,
        completed_at: null,
        created_at: new Date(),
        updated_at: null,
    };

    database.insert("tasks", task);

    return res.writeHead(201).end();
}
