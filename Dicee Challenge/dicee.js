var randomNum = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "images/dice" + randomNum + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage);

var randomNum1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage1 = "images/dice" + randomNum1 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage1);

if(randomNum > randomNum1)
{
  document.querySelector("h1").innerHTML = "Player 1 Wins!!";
}
else if(randomNum1 > randomNum)
{
  document.querySelector("h1").innerHTML = "Player 2 Wins!!";
}
else{
  document.querySelector("h1").innerHTML = "Draw!!"
}
