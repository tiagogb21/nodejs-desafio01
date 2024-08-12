import 'dotenv/config'
import http from "http";
import { taskRoutes } from './routes/task.js';
import { json } from './middlewares/json.js';

const { PORT } = process.env;

const server = http.createServer(async (req, res) => {
    const { method, url } = req;

    json(req, res);

    const taskRoute = taskRoutes.find((route) => route[method] === method && route[url] === url);

    console.log(taskRoute);

    if(taskRoute) return taskRoute.handler(req, res);

    return res.writeHead(404).end();
});

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
