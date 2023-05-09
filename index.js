function randNum(max, min){
    return Math.floor(Math.random() * (max-min) + min);
}

let rand1 = randNum(7,1);
let rand2 = randNum(7,1);
// console.log(ret); //checked 

document.querySelector(".img1").src=`./images/dice${rand1}.png`;
document.querySelector(".img2").src=`./images/dice${rand2}.png`;

if(rand1>rand2){
    document.querySelector("h1").innerHTML=`🚩Player 1 Wins`;
}
if(rand2>rand1){
    document.querySelector("h1").innerHTML=`Player 2 Wins🚩`;
}
if(rand1===rand2){
    document.querySelector("h1").innerHTML="Draw!";
}