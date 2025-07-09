import { error } from "console";
import http from "http";
const PORT = 3001;

const server = http.createServer((req, res) => {
    const budy = [];
    req.on("data", (chunk)=> {
        // console.log(chunk);
        console.log(req.headers);
        budy.push(chunk);
    })
    req.on("end", ()=> {
        if(req.method === "POST" && req.headers['content-type'] === 'application/json'){
            const data = JSON.parse(Buffer.concat(budy).toString());
            console.log(data);
            res.end("JSON accepted");
        }
        else{
            res.end("Unsupported request")
        }
    })
    req.on("eror", err => {
        console.error("request error:" + err)
        res.writeHead(500, {'content-type':'application/json'})
    })
});

  
  server.listen(PORT, ()=>{
    console.log('Server running on "http://localhost" port:' + PORT);
  })
  