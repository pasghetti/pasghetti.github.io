var names = [];
var board = [[]];
var boardSize = 100;
var sessionStarted = false;
var strip = [];
for(var j = 0; j < boardSize; j++){
  strip.append(0);
}
for(var i = 0; i < boardSize; i++){
  board.append(j);
}
function enter(name){
  if(!(name in window){
    return -1;
  } else {
    names.push(name);
    return names.length;
  }
}
var Square = (function(coordx, coordy){
  this.x = coordx;
  this.y = coordy;
});
var Bot = (function(botname){
  this.name = botname;
  var res;
  var unentered = false;
  if((res = enter(this.name)) == -1){
    unentered = true;
  } else {
    this.territoryID = res - 1;
    this.botID = -(this.territoryID + 1);
    this.currentSquare = new Square(Math.floor(Math.random() * 100), Math.floor(Math.random() * 100));
  }
});
function render(){

}
function numberOfBlackSquaresSteppedOn(botname){

}
function numberOfWhiteSquaresSteppedOn(botname){

}
function board(botname){

}
