function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

var randomNumber1 = getRandomInt(1,7);
var randomNumber2 = getRandomInt(1, 7);

var path = "images\\dice";

document.querySelector(".img1").setAttribute("src", path + randomNumber1 + ".png");
document.querySelector(".img2").setAttribute("src", path + randomNumber2 + ".png");

if(randomNumber1 == randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw!";
}
else if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🏆Player1 Wins!";
}
else {
    document.querySelector("h1").innerHTML = "Player2 Wins!🏆";
}