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


