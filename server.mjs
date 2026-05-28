import { createServer } from "node:http";
import { extname, join, normalize } from "node:path";
import { readFile } from "node:fs/promises";

const root = process.cwd();
const port = Number(process.env.PORT || 5173);

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".pdf": "application/pdf"
};

createServer(async (request, response) => {
  try {
    const url = new URL(request.url || "/", `http://localhost:${port}`);
    const cleanPath = normalize(url.pathname === "/" ? "/index.html" : url.pathname);
    if (cleanPath.includes("..")) throw new Error("Invalid path");
    const publicPath =
      cleanPath.startsWith("/images/") || cleanPath.startsWith("/downloads/")
        ? join(root, "public", cleanPath)
        : join(root, cleanPath);
    const file = await readFile(publicPath);
    response.writeHead(200, { "Content-Type": types[extname(cleanPath)] || "application/octet-stream" });
    response.end(file);
  } catch {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Niet gevonden");
  }
}).listen(port, "127.0.0.1", () => {
  console.log(`Green Blue Challenge Park NMHC draait op http://127.0.0.1:${port}`);
});
