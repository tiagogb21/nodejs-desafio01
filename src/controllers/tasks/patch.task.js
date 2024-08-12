import { database } from "../../database/index.js";

export const patch = (req, res) => {
    const task = database.select('tasks', { id });

    const isTaskCompleted = Boolean(task.completed_at);

    if(!isTaskCompleted) return res.writeHead(404).end();

    const completed_at =  new Date();

    database.update('tasks', id, { completed_at })

    return res.writeHead(204).end()
}
