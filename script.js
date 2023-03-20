var output = document.getElementById("output")
var input = document.getElementById("myText");
      input.addEventListener("keyup", function(event){
        event.preventDefault();
        if(event.keyCode === 13){
          gameStart();
          input.focus();
        }
      });
var help = 
  "********************************</br>\
  h - help</br>\
  t - gain a tip(hint)</br>\
  w - walk</br>\
  *********************************</br>"
function gameStart(){
  output.innerHTML += "</br>>>"  + input.value
  if(input.value == "h"){
    output.innerHTML += "</br>" + help
  }
  output.scrollTop = output.scrollHeight
}
