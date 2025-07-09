import http from "http";
import {URL} from "url";

const PORT = 4000;

const server = http.createServer((req, res) => {
    console.log(`You used method: ${req.method}`);
    const myUrl = new URL("https://app.com/search?query=node&sort=asc");
    myUrl.searchParams.set("sort", "desc");
    myUrl.searchParams.append("page", 3);
    console.log(myUrl);
    myUrl.searchParams.delete("query")
    console.log(myUrl.toString());
    console.log("type: " + myUrl.searchParams.get("type"));
    console.log("language: " + myUrl.searchParams.get("lang"));
    res.end("Good day")
})

server.listen(PORT, () => {
     console.log(`server is running on "http://localhost:${PORT}"`);
})