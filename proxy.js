// @ts-nocheck
import path from "path";
import { fileURLToPath } from "url";
import express from "express"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename);
const app = express();
app.use(express.static(path.join(__dirname,"dist")));
app.listen(3000, () => {
    console.log("Proxy is running on port");
})
