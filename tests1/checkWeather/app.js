import http from "http";
import { isSafeToHike } from "./functions.js";

const server = http.createServer((req, res) => {
  const budy = [];
  req.on("data", (chunk) => {
    // console.log(chunk);
    budy.push(chunk);
  });
  req.on("end", () => {
    if (req.method === "POST" && req.url === "/check-weathe") {
      const data = JSON.parse(Buffer.concat(budy).toString());
      const { temp, speed } = data;
      res.write(JSON.stringify(isSafeToHike(temp, speed)));
      res.end();
    } else {
      res.end("Unsupported request");
    }
  });
  req.on("eror", (err) => {
    console.error("request error:" + err);
    res.writeHead(500, { "content-type": "application/json" });
  });
});

server.listen(4000, () => {
  console.log('Server running on "http://localhost" port:' + 4000);
});
