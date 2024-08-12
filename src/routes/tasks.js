import { del } from "../controllers/tasks/delete.task.js";
import { readAll, create } from "../controllers/tasks/index.js";
import { update } from "../controllers/tasks/update.task.js";
import { buildRoutePath } from "../utils/build-route-path.js";

export const taskRoutes = [
    {
        method: 'POST',
        url: buildRoutePath('/tasks'),
        handler: create,
    },
    {
        method: 'GET',
        url: buildRoutePath('/tasks'),
        handler: readAll,
    },
    {
        method: 'PUT',
        url: buildRoutePath('/tasks/:id'),
        handler: update,
    },
    {
        method: 'DELETE',
        url: buildRoutePath('/tasks/:id'),
        handler: del,
    },
]