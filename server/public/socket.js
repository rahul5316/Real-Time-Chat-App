// it will send a message to the server
socket.emit("userConnected", username)

//socekt.on is used to consume data sent by socket.emit


//socket.emit and socket.on come hand in hand

socket.on("join", function(username) {

  let joinDiv = document.createElement("div");
  joinDiv.classList.add("chat");
  joinDiv.classList.add("join");
  joinDiv.textContent = `${username} joined chat`;
  chatWindow.append(joinDiv);
})