import { database } from "../../database/index.js";
import { validatePartialBody } from "../../middlewares/validatePartialBody.js";

export const update = (req, res) => {
    if(!req.body) return res
        .writeHead(400)
        .end(JSON.stringify({ message: "title or description are required" }));

    const { id } = req.params;
    const { title, description } = req.body;
    const [task] = database.select('tasks', { id });

    validatePartialBody(title, description);

    database.update("tasks", id, {
        title: title ?? task.title,
        description: description ?? task.description,
        updated_at: new Date(),
    });

    return res.writeHead(204).end();
};
