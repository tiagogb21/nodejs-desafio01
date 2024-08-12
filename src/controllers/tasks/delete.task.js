import { database } from "../../database/index.js";

export const del = (req, res) => {
    const { id } = req.params

    database.delete('users', id)

    return res.writeHead(204).end()
}
