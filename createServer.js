const http = require("http");

const PORT = process.env.PORT;

const server =http.createServer((req,res)=>{
    
    if(req.url === "/"){
        return res.end("<h1>Home Page is aLL things</h1>")
    }
    else if(req.url==="/about"){
        return res.end("<h1>About page</h1>");
    }
    else{
        return res.end("<h1>404 page not found</h1>")
    }

    
})

server.listen(PORT,()=>{
    console.log(`Sever is working`)
});