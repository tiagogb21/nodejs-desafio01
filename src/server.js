import "dotenv/config";
import http from "http";
import { taskRoutes } from "./routes/tasks.js";
import { json } from "./middlewares/json.js";

const { PORT } = process.env;

const server = http.createServer(async (req, res) => {
    const { method, url } = req;

    await json(req, res);

    const taskRoute = taskRoutes.find((route) => {
        return route.method === method && route.url.test(url);
    });

    if(!taskRoute) return res.writeHead(404).end();

    if (taskRoute) {
        const routeParams = req.url.match(taskRoute.path);

        const { query, ...params } = routeParams.groups;

        req.params = params;
        req.query = query ? extractQueryParams(query) : {};

        return route.handler(req, res);
    }

    return res.writeHead(404).end();
});

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
