let p1=()=>{
let randomNumber1 = Math.floor(Math.random()*6)+1
if (randomNumber1 === 1) {
    document.getElementsByClassName("img1")[0].setAttribute("src","images/dice1.png")
}else if(randomNumber1 === 2){
    document.getElementsByClassName("img1")[0].setAttribute("src","images/dice2.png")
}else if(randomNumber1 === 3){
    document.getElementsByClassName("img1")[0].setAttribute("src","images/dice3.png")
}else if(randomNumber1 === 4){
    document.getElementsByClassName("img1")[0].setAttribute("src","images/dice4.png")
}else if(randomNumber1 === 5){
    document.getElementsByClassName("img1")[0].setAttribute("src","images/dice5.png")
}else{
    document.getElementsByClassName("img1")[0].setAttribute("src","images/dice6.png")
}
return randomNumber1
}

let p2=()=>{
let randomNumber2 = Math.floor(Math.random()*6)+1
if (randomNumber2 === 1) {
    document.getElementsByClassName("img2")[0].setAttribute("src","images/dice1.png")
}else if(randomNumber2 === 2){
    document.getElementsByClassName("img2")[0].setAttribute("src","images/dice2.png")
}else if(randomNumber2 === 3){
    document.getElementsByClassName("img2")[0].setAttribute("src","images/dice3.png")
}else if(randomNumber2 === 4){
    document.getElementsByClassName("img2")[0].setAttribute("src","images/dice4.png")
}else if(randomNumber2 === 5){
    document.getElementsByClassName("img2")[0].setAttribute("src","images/dice5.png")
}else{
    document.getElementsByClassName("img2")[0].setAttribute("src","images/dice6.png")
}
return randomNumber2
}
p1();
p2();

let result =()=>{
    let resultP1 = p1();
    let resultP2 = p2();
    if (resultP1 > resultP2) {
        document.querySelector(".container h1").innerHTML="PLAYER 1 WINS! &#127881;"
    } 
    else if(resultP2 > resultP1){
        document.querySelector(".container h1").innerHTML="PLAYER 2 WINS! &#127881;"
    }
    else{
        document.querySelector(".container h1").innerHTML="DRAW! &#129309;"
    }
}
result();



/********************************* DIFFERENT METHOD **********************************/

/*
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


//If player 1 wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
*/
