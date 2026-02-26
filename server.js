const http=require("http");
const app= require("./app");

const port=process.constrainedMemory.PORT|| 8000;
const server= http.createServer(app);

app.listen(port)


module.exports=server;