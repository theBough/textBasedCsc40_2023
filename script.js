var activeRow = 0;
var activeColumn = 0;
var move = false
var use = false;
//items in the game
var haveSword = true;

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
  u- use</br>\
  t - gain a tip(hint)</br>\
  m - move</br>\
  *********************************</br>"
function gameStart() {
  if (move && roomRestriction()) {
    moveIsOn();
  } else if(use){
    //resolve the USE command
    useIsOn();
  }else {
    output.innerHTML += "</br>>>" + input.value
    if (input.value == "h") {
      output.innerHTML += "</br>" + help
    }else if(input.value == 'u'){
      output.innerHTML += "</br>What in your inventory would you like to use?"
      use = true;
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
function useIsOn(){
  /* this will resolve what item the user wants to use.
*/
  use = false;
   output.innerHTML += "</br>>>" + input.value
  //check to see what item they want to use
  //also going to check they are using it in the proper room
  //in the case below they have to use the sword in room 100
  if(input.value == "sword" && rooms[activeRow][activeColumn].name == "Room 100"){
    if(haveSword){
      output.innerHTML += "</br>>>You take out your shinny sword, and with great skill stab the deadly mosquito right through the heart!</br>It flutters its wings and falls to its death on the floor. You pick it up and store it in your inventory."
    }
  }else{
    output.innerHTML += "</br>>>Sorry you either don't have that object or you can't use it here."
  }
}
