let chatInput = document.querySelector(".chat-input");

let chatWindow = document.querySelector(".chat-window");

chatInput.addEventListener("keypress", function(e){
if(e.key == "Enter" && chatInput.value) {
console.log("inside key enter");
  let chatDiv = document.createElement("div");
  chatDiv.classList.add("chat");
  chatDiv.classList.add("right");
  chatDiv.textContent = chatInput.value;
  chatWindow.append(chatDiv);
  chatInput.value = "";


}
})