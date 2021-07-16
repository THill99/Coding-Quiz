var finalScore = localStorage.getItem("High Score");

var yourScore = document.getElementById("yourScore");
yourScore.textContent = finalScore;


function displayScores(){
    var scoreContainer = document.getElementById("hiScoreList");
    scoreContainer.innerHTML="";
  for (let i = 0; i <highScores.length; i++){
      var tableRow = document.createElement("tr");
      var initial = document.createElement("td");
      var score = document.createElement("td");
      initial.textContent=highScores[i].initials;
      score.textContent=highScores[i].score;
      tableRow.appendChild(initial);
      tableRow.appendChild(score)
      scoreContainer.appendChild(tableRow);
  }
}

var submitScore = document.getElementById("submit");
let highScores = JSON.parse(localStorage.getItem("High Scores List")) || [];
displayScores();
submitScore.addEventListener('click', function(){
    var input = document.getElementById("initials");
    const scoresList = {initials: input.value, score: finalScore};
    highScores.push(scoresList);
    highScores.sort(function(a, b){return b.score - a.score});
    localStorage.setItem("High Scores List", JSON.stringify(highScores));
    displayScores();
});

var clearScore = document.getElementById("clear");
clearScore.addEventListener('click',function(){
    localStorage.clear();
})