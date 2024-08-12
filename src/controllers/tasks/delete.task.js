import { database } from "../../database/index.js";

export const del = (req, res) => {
    const { id } = req.params

    database.delete('tasks', id)

    return res.writeHead(204).end()
}
