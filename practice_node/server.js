
// const http = require("http");

// const HOSTNAME = process.env.HOSTNAME || "localhost";
// const port = process.env.port || 3000;

// const server = http.createServer((request , response)=>{
//     response.statusCode = 200;
//     response.setHeader("Content-Type", "text/plain");
//     response.end("Assalam Alaikum");
// });

// server.listen(port , HOSTNAME ,()=>{
//     console.log(`Server is running at http://${HOSTNAME}:${port}/`);
// });

// console.log(__filename);
// console.log(__dirname);

// const fs = require("fs");
// try {
//     const data = fs.readFileSync("hi.txt","utf8");
//     console.log(data);
    
// } catch (err) {
//     console.log(err);
    
// }
// console.log("Hello how are u");

// const {appendFile}= require("fs");
// const newContent = "\nPlace for sinners";

// appendFile("hi.txt",newContent , (err)=>{
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log("Content Written!");
    
// });

// const {rename} = require("fs");

// rename("hi.txt", "hello.txt" , (err)=>{
//     if (err) {
//         console.error(err)
//         return 
//     }
//     console.log("File renamed");
    
// })

// const {unlink} = require("fs");

// unlink("hello.txt",(err)=>{
//     if (err) {
//         console.error(err)
//         return
//     }
//     console.log("File deleted");
    
// });

// const http = require("http");
// const PORT = process.env.PORT || 3000 ;
// const server = http.createServer((req , res)=>{
//     res.statusCode = 200;
//     res.setHeader("Content-Type","text/plain")
//     res.write("hell")
//     res.write("hell again")
//     res.end("the end")
// })
// server.listen(PORT, ()=>{ console.log(`Server is running${PORT}`)})

const http = require("http")
const fs = require("fs");

const port = process.env.port ||3000;

const server = http.createServer((req, res)=>{

res.setHeader("Content-Type" , "text/html");
let path = "./";
switch (req.url) {
    case "/":
        path += "index.html"
        res.statusCode = 200;
        break;
    case "/about":
        path += "about.html"
        res.statusCode = 200;
        break;
    default:
        path += "404.html"
        res.statusCode = 404;
        break;
}
fs.readFile(path, (err , data)=>{
    if(err){
        console.error(err)
        res.end()
    }
    else{

        res.end(data)
    }
})

})

server.listen(port,()=>{
    console.log(`server is listening on ${port}`)
})