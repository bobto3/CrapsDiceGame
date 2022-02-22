//Dice 1
const firstRandomNum = Math.floor(Math.random() *6) +1;

const firstDiceImage = "Assets/Dice Faces/" + firstRandomNum +  ".svg";

document.querySelectorAll("img")[0].setAttribute("src", firstDiceImage);

//Dice 2
const secondRandomNum = Math.floor(Math.random() *6) +1;

const secondDiceImage = "Assets/Dice Faces/" + secondRandomNum +  ".svg";

document.querySelectorAll("img")[1].setAttribute("src", secondDiceImage);

//Dice3
const thirdRandomNum = Math.floor(Math.random() *6) +1;

const thirdDiceImage = "Assets/Dice Faces/" + thirdRandomNum +  ".svg";

document.querySelectorAll("img")[2].setAttribute("src", thirdDiceImage);

const cardRandomNum = Math.floor(Math.random() * 52) +1;

const cardImage = "Assets/Cards/" + cardRandomNum +  ".jpg";

document.querySelectorAll("img")[3].setAttribute("src", cardImage);