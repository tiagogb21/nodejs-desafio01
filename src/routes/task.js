import { readAll, create } from "../controllers/tasks/index.js";

export const taskRoutes = [
    {
        method: 'GET',
        url: '/tasks',
        handler: (req, res) => readAll(req, res),
    },
    {
        method: 'POST',
        url: '/tasks',
        handler: (req, res) => create(req, res),
    },
]