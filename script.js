let chatInput = document.querySelector(".chat-input");

let chatWindow = document.querySelector(".chat-window");

let userName = prompt("Enter you Name")

chatInput.addEventListener("keypress", function(e){
if(e.key == "Enter" && chatInput.value) {
console.log("inside key enter");
  let chatDiv = document.createElement("div");
  chatDiv.classList.add("chat");
  chatDiv.classList.add("right");
  chatDiv.textContent = userName+ " : "+chatInput.value;
  chatWindow.append(chatDiv);
  chatInput.value = "";


}
})