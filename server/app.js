//express=> it's a framework based on node js. Servers can be made using node but they are a bit complicated. Express just gave ome easier functions to node to create servers. That's it

//nodemon=> dev dependency. Dependency which is only used during developement. It detects changes in your code. if you make changes, it will account that change stop the server, and start it back again

//socket.io => socket implemented

const express = require("express");

const app = express();

app.use(express.json());

//get method on path "/". It receives two object:request and response
app.get("/", function(req, response){


  console.log(request);


})

//server is created from the above two lines.

//where will the app be live. Suppose it will be live at the line of code 5500 in ur computer

//used to run the app
app.listen(5500, function() {
  console.log("Server started at port 5500");
})