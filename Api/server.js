import http from "http";
const PORT = 3000;

const server = http.createServer((req, res) => {
  if(req.method === "GET"){
    res.end("Hello from GET")
  }
  else if(req.method === "POST"){
    res.end("Hello from POST")
  }
  else{
    res.end("Not supported")
  }
});

server.listen(PORT, ()=>{
  console.log('Server running on "http://localhost" port: ' + PORT);
})
