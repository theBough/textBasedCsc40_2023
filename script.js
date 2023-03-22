var activeRow = 0;
var activeColumn = 0;
var move = false
var output = document.getElementById("output")
var input = document.getElementById("myText");
input.addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    gameStart();
    input.focus();
  }
});
var help =
  "********************************</br>\
  h - help</br>\
  t - gain a tip(hint)</br>\
  m - move</br>\
  *********************************</br>"
function gameStart() {
  if (move) {
    moveIsOn();
  } else {
    output.innerHTML += "</br>>>" + input.value
    if (input.value == "h") {
      output.innerHTML += "</br>" + help
    } else if (input.value == 't') {
      output.innerHTML += "</br>Head to the Lobby"
    } else if (input.value == "corbin") {
      output.innerHTML += "</br> You found the easter egg, you get an A in Comp Sci"
    }else if (input.value == "m") {
      output.innerHTML += "</br> What direction do you want to go?</br><small>(e-East w-West n-North s-South)</small>"
      move = true;
    }//end if statemtemt
  }//end if statemtent
  output.scrollTop = output.scrollHeight
}//end Gamestart
function moveIsOn(){
  move = false;
  output.innerHTML += "</br>>>" + input.value
  switch(input.value){
    case "e":
      activeColumn += 1
      output.innerHTML += "</br>>>" + rooms[activeRow][activeColumn]
    break;
    case "s":
      activeRow += 1
      output.innerHTML += "</br>>>" + rooms[activeRow][activeColumn]
    break;
    case "w":
      activeColumn -=1
      output.innerHTML += "</br>>>" + rooms[activeRow][activeColumn]
    break;
    case "n":
      activeRow += 1
      output.innerHTML += "</br>>>" + rooms[activeRow][activeColumn]
    break;
  }//end switch
}//end moveIsOn
