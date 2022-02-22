//Dice 1
document.querySelector("#dice1").setAttribute("src", "Assets/Dice Faces/Dashed.svg");
//Dice 2
document.querySelector("#dice2").setAttribute("src", "Assets/Dice Faces/Dashed.svg");
//Dice3
document.querySelector("#dice3").setAttribute("src", "Assets/Dice Faces/Dashed.svg");

//Roll button fuctionality
function rollTheDice() {
    //Random dice 1
    const firstRandomNum = Math.floor(Math.random() *6) +1;
    const firstDiceImage = "Assets/Dice Faces/" + firstRandomNum +  ".svg";
    document.querySelector("#dice1").setAttribute("src", firstDiceImage);

    //Random dice 2
    const secondRandomNum = Math.floor(Math.random() *6) +1;
    const secondDiceImage = "Assets/Dice Faces/" + secondRandomNum +  ".svg";
    document.querySelector("#dice2").setAttribute("src", secondDiceImage);

    //Random dice3
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
    document.querySelector("h2").innerHTML=("Numbers Rolled: " + uniqueScores.sort(function(a, b){return a-b}).join(", "));
}

//New card button fuctionality
function newCard() {
    //Random card
    const cardRandomNum = Math.floor(Math.random() * 52) +1;
    const cardImage = "Assets/New Cards/" + cardRandomNum +  ".svg";
    document.querySelector("#openCard").setAttribute("src", cardImage);
    document.querySelector("h2").innerHTML=("New Roll!");
    
    //Dice 1 dashed
    document.querySelector("#dice1").setAttribute("src", "Assets/Dice Faces/Dashed.svg");
    //Dice 2 dashed
    document.querySelector("#dice2").setAttribute("src", "Assets/Dice Faces/Dashed.svg");
    //Dice3 dashed
    document.querySelector("#dice3").setAttribute("src", "Assets/Dice Faces/Dashed.svg");
}