export function validatePartialBody(title, description) {
    if (!title || !description) {
        return res
            .writeHead(400)
            .end(JSON.stringify({ message: "title or description are required" }));
    }
}