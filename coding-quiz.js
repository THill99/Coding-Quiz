var questionsContainer = document.getElementById("questions");

var startQuizButton = document.createElement("button");

const questions=[{text:"Which HTML element do we place javascript code in?",answers:["<head>","<java>","<script>","<body>"],correctanswer: "<script>"},
{text:"What is the correct syntax for a javascript variable?",answers:["var myVariable = 100;","variable myVariable = 100;","var myVariable = 100","myVariable =100;"],correctanswer: "var myVariable = 100;"},
{text:"Which is the correct way to write a javascript array?",answers:["const colors = 1=[red], 2=[blue];","const colors = ['red','blue'];", "colors =[red,blue];", "array colors: {red,blue};"],
correctanswer:"const colors = ['red','blue']"},{text:"How does one obtain a random whole integer with javascript?",answers:["Math.random()","Math.randomInt()","Math.floor(Math.random())","Math.intRandom()"],
correctanswer:"Math.floor(Math.random())"},{text:"Which of the following is a correct for loop?",answers:["for (i=0 i<5 i++)","for: i=0 i<5 i++","for (let i=0; i<5; i++)","for i=0; i<5; i++"],correctanswer:"for (let i=0; i<5; i++)"}];

var timeRemaining = 100;

var questionNumber;
questionNumber= 0;
var timerInterval;
function displayTime(){
    var timer = document.getElementById("timer");
    timer.textContent= timeRemaining;
}

startQuizButton.textContent = "Start Quiz!";
startQuizButton.addEventListener('click', function(){
    // Hide Button
    startQuizButton.style.display="none";
    //Timer Starts
    timeRemaining = 100;
    displayTime();
    timerInterval = setInterval(() => {
    timeRemaining--;
    if(timeRemaining <= 0){
        gameOver();
    }
    displayTime();
    }, 1000);
    
    //Display First Question and answer choices
   nextQuestion();

});
//Question Function
function nextQuestion(){
    if(!questions[questionNumber]){
        return gameOver();
    }
    questionsContainer.innerHTML = ""
    var question = questions[questionNumber].text;
    document.createElement("h3");
    questionsContainer.append(question);
    //Loop that displays answer buttons
    for (let i=0; i < questions[questionNumber].answers.length;i++){
        var answerButton = document.createElement("button");
        answerButton.textContent = questions[questionNumber].answers[i];
        questionsContainer.append(answerButton);
        //Move to next question upon answer click
        answerButton.addEventListener('click', function(event){
            if(event.target.textContent === questions[questionNumber].correctanswer){
                alert("Correct!")
                questionNumber++;
                nextQuestion();
            }else{
                alert("Incorrect!")
                questionNumber++;
                timeRemaining-=5;
                displayTime();
                nextQuestion();
            }
        })
    }
}
questionsContainer.append(startQuizButton);

// To-Do: Answer click handler function

// To-Do: Time-Out game over

function gameOver(){
    clearInterval(timerInterval);
    alert("Game Over!");
    localStorage.setItem("High Score",timeRemaining);
    window.location.href="highscore.html"
}