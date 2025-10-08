const Snack = document.querySelector(".snackimg");
const Water = document.querySelector(".waterimg");
const Gun = document.querySelector(".gunimg");
const DisplayPlayerChoice = document.querySelector(".DisplayPlayerChoice");
const DisplayComputerChoice = document.querySelector(".DisplayComputerChoice");
const PlayerScoreCord = document.querySelector(".DisplayPlayerScores");
const ComputerScoreCord= document.querySelector(".DisplayComputerScores");
const DisplayResult = document.querySelector(".DisplayResult");

let playerchoose;
let computerchoose;
let PlayerScore = 0;
let ComputerScore = 0;
function ComputerChoice(){
    let choices = ['Snack 🐍', 'Gun 🔫', 'Water 💧'];
    return choices[Math.floor(Math.random()*3)];
}
function DisplayPlayerScore(){
    PlayerScore ++;
    PlayerScoreCord.textContent = PlayerScore.toString().padStart(2,"0");
     
}
function DisplayComputerScore(){
    ComputerScore ++;
    ComputerScoreCord.textContent = ComputerScore.toString().padStart(2,"0");

}
function CalculateResult(){
    DisplayResult.style.display = "flex";
    if(
        (computerchoose === "Snack 🐍" && playerchoose === "Water 💧")||
        (computerchoose === "Water 💧" && playerchoose === "Gun 🔫") ||
        (computerchoose === "Gun 🔫" && playerchoose === "Snack 🐍")
    ){
        DisplayResult.textContent = `you Lose 😔!!`;
        DisplayComputerScore();
    }
    else if(
        (computerchoose === "Snack 🐍" && playerchoose === "Gun 🔫") ||
        (computerchoose === "Water 💧" && playerchoose === "Snack 🐍" )|| 
        (computerchoose === "Gun 🔫" && playerchoose === "Water 💧")
    ){
        DisplayResult.textContent = `You Win 🥳!!`;
        DisplayPlayerScore();
    }
    else if(computerchoose === playerchoose){
        DisplayResult.textContent = `It's a Draw  😐!!`;
    }
    else{
        throw new Error("SomeThing Wrong !!")
    }
}
const DisplayChoicese = document.querySelector(".DisplayChoicese");
Snack.addEventListener("click", ()=>{
    DisplayChoicese.style.display = "flex";
    DisplayPlayerChoice.textContent = ` PLAYER : Player Choice snack 🐍`;
    playerchoose = "Snack 🐍";
    computerchoose = ComputerChoice();
    console.log(computerchoose)
    DisplayComputerChoice.textContent = `COMPUTER : Computer Choice ${computerchoose}`;
    CalculateResult();
})
Water.addEventListener("click", ()=>{
    DisplayChoicese.style.display = "flex";
    DisplayPlayerChoice.textContent = `PLAYER : Player Choice Water 💧`;
    playerchoose = "Water 💧";
    computerchoose = ComputerChoice();
    DisplayComputerChoice.textContent = `COMPUTER : Computer Choice ${computerchoose}`;
    CalculateResult()
})
Gun.addEventListener("click", ()=>{
    DisplayChoicese.style.display = "flex";
    DisplayPlayerChoice.textContent = `PLAYER : Player Choice Gun 🔫`;
    playerchoose = "Gun 🔫";
    computerchoose = ComputerChoice();
    DisplayComputerChoice.textContent = `COMPUTER : Computer Choice ${computerchoose}`;
    CalculateResult()
});

