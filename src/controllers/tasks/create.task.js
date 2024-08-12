import { randomUUID } from "node:crypto";
import { database } from "../../database/index.js";
import { validateFullBody } from "../../middlewares/validateFullBody.js";

export const create = (req, res) => {
    if(!req.body) return res
        .writeHead(400)
        .end(JSON.stringify({ message: "title and description are required" }));

    const { title, description } = req.body;

    validateFullBody(title, description);

    const task = {
        id: randomUUID(),
        title,
        description,
        completed_at: null,
        created_at: new Date(),
        updated_at: null,
    };

    database.insert("tasks", task);

    return res.writeHead(201).end();
}
