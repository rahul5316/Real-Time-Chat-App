//express=> it's a framework based on node js. Servers can be made using node but they are a bit complicated. Express just gave ome easier functions to node to create servers. That's it

//nodemon=> dev dependency. Dependency which is only used during developement. It detects changes in your code. if you make changes, it will account that change stop the server, and start it back again

//socket.io => socket implemented

const express = require("express");
const { Server } = require("socket.io");
//server is created

const app = express();
const http = require('http');
const server = http.createServer(app);

const io = new Server(server);



//app.use(express.json());
app.use(express.static("public"));// the public file is now static that means the client can now see that file and it can be used anywhere. static files never change

//get method on path "/". It receives two object:request and response
// app.get("/home", function(req, response){

const userList  = [];


//   console.log(req);
//   response.send("Welcome to the homepage!!")
// })

io.on("connection", function(socket){
  console.log(socket.id+ "connected!!");
  // console.log(socket);

   socket.on("userConnected", function(username){
     let userObject = {id: socket.id, username:username};
     userList.push(userObject);
     console.log(userList);
//broadcast a message to all other clients except sender
     socket.broadcast.emit("join",username);

   })
})

//server is created from the above two lines.

//where will the app be live. Suppose it will be live at the line of code 5500 in ur computer

//used to run the app
app.listen(5500, function() {
  console.log("Server started at port 5500");
})

//socket.emit is used to send data where socket is connecte



