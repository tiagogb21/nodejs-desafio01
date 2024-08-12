import {
    readAll,
    create,
    update,
    del,
    updateComplete,
} from "../controllers/tasks/index.js";
import { buildRoutePath } from "../utils/build-route-path.js";

export const taskRoutes = [
    {
        method: "POST",
        url: buildRoutePath("/tasks"),
        handler: create,
    },
    {
        method: "GET",
        url: buildRoutePath("/tasks"),
        handler: readAll,
    },
    {
        method: "PUT",
        url: buildRoutePath("/tasks/:id"),
        handler: update,
    },
    {
        method: "DELETE",
        url: buildRoutePath("/tasks/:id"),
        handler: del,
    },
    {
        method: "PATCH",
        url: buildRoutePath("/tasks/:id/complete"),
        handler: updateComplete,
    },
];
