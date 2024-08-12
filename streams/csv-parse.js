import "dotenv/config";
import fs from "node:fs";
import { parse } from "csv-parse";

const PORT = process.env;

const csvPath = new URL("./tasks.csv", import.meta.url);

const stream = fs.createReadStream(csvPath);

const records = [];

const csvParser = parse({
    delimiter: ",",
    skipEmptyLines: true,
    fromLine: 2,
});

const options = (title, description) => {
    return {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title,
            description,
        }),
    }
}

async function run() {
    const linesParse = stream.pipe(csvParser);

    for await (const line of linesParse) {
        const [title, description] = line;

        await fetch(`http://localhost:${PORT}/tasks`, options(title, description));

        await wait(1000);
    }
}

run();

function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
