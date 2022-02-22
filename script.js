//Dice 1
const firstRandomNum = Math.floor(Math.random() *6) +1;
const firstDiceImage = "Assets/Dice Faces/" + firstRandomNum +  ".svg";
document.querySelector("#dice1").setAttribute("src", firstDiceImage);

//Dice 2
const secondRandomNum = Math.floor(Math.random() *6) +1;
const secondDiceImage = "Assets/Dice Faces/" + secondRandomNum +  ".svg";
document.querySelector("#dice2").setAttribute("src", secondDiceImage);

//Dice3
const thirdRandomNum = Math.floor(Math.random() *6) +1;
const thirdDiceImage = "Assets/Dice Faces/" + thirdRandomNum +  ".svg";
document.querySelector("#dice3").setAttribute("src", thirdDiceImage);

function rollTheDice() {
    //Dice 1
    const firstRandomNum = Math.floor(Math.random() *6) +1;
    const firstDiceImage = "Assets/Dice Faces/" + firstRandomNum +  ".svg";
    document.querySelector("#dice1").setAttribute("src", firstDiceImage);

    //Dice 2
    const secondRandomNum = Math.floor(Math.random() *6) +1;
    const secondDiceImage = "Assets/Dice Faces/" + secondRandomNum +  ".svg";
    document.querySelector("#dice2").setAttribute("src", secondDiceImage);

    //Dice3
    const thirdRandomNum = Math.floor(Math.random() *6) +1;
    const thirdDiceImage = "Assets/Dice Faces/" + thirdRandomNum +  ".svg";
    document.querySelector("#dice3").setAttribute("src", thirdDiceImage);

    //Creates array of possible roll scores and displays the list
    let scores = [firstRandomNum, secondRandomNum, thirdRandomNum, 
        firstRandomNum + secondRandomNum, 
        secondRandomNum + thirdRandomNum,
        firstRandomNum + thirdRandomNum,
        firstRandomNum + secondRandomNum + thirdRandomNum]; 
    uniqueScores = [...new Set(scores)];  
    document.querySelector("h2").innerHTML=("Numbers Rolled: " + uniqueScores.sort(function(a, b){return a-b}));
}

function newCard() {
    //Card
    const cardRandomNum = Math.floor(Math.random() * 52) +1;
    const cardImage = "Assets/New Cards/" + cardRandomNum +  ".svg";
    document.querySelector("#openCard").setAttribute("src", cardImage);
}