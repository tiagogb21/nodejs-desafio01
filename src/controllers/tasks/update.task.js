import { database } from "../../database/index.js";

export const update = (req, res) => {
    const {id} = req.params;

    const {title, description} = req.body;

    database.update('users', id, {
        title,
        description,
    })

    return res.writeHead(204).end()
}
