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
  if (move && roomRestriction()) {
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
    }else{
      output.innerHTML += "</br> Sorry I don't understand that command"
    }
  }//end if statemtent
  input.value = ""
  output.scrollTop = output.scrollHeight
}//end Gamestart
function moveIsOn(){
  move = false;
  output.innerHTML += "</br>>>" + input.value
  switch(input.value){
    case "e":
      activeColumn += 1
    break;
    case "s":
      activeRow += 1
    break;
    case "w":
      activeColumn -=1
    break;
    case "n":
      activeRow -= 1
    break;
  }//end switch
   output.innerHTML += "</br>>>" + rooms[activeRow][activeColumn].description
}//end moveIsOn
function roomRestriction(){
 /*This function based on a  direction letter
  of either n,e,s,w if we need restrict a room 
  we will do it here.
  Add an if-Block for each restriction you want.
  */ 
  if(rooms[activeRow][activeColumn].name == "Room 100" && input.value == "n"){
    /*They are in room 100, and want to go North, I want to stop them 
    from doing that.*/
    output.innerHTML += "</br>Sorry there is no door there</br>"
    return false;
  }//end if

  return true;
}//end roomRestriction
