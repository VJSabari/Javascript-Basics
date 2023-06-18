var stopDiv = document.getElementsByClassName("stop")
var resultDiv = document.getElementById("result")
var scoreDiv = document.getElementById("score")
var score = 0
var inputs = document.querySelectorAll(".child");
var options = ["rock", "paper", "scissor"]



inputs.forEach(input => {
    input.onclick = () => {
        
        var userInput = input.getAttribute("value")
        var random = options[Number(Math.floor(Math.random() * 3))]
        console.log(random)
        if(random == userInput)
        {
            resultDiv.innerHTML = "Match is drawn";
            scoreDiv.innerHTML = "Your score is " + "<b>" + score + "</b>" ;
        }
        else if(userInput == "rock" && random == "paper" || userInput == "paper" && random == "scissor" || userInput == "scissor" && random == "rock")
        {
            score -= 1;
            resultDiv.innerHTML = "You lose the match";
            scoreDiv.innerHTML = "Your score is " + "<b>" + score + "</b>" ;
        }
        else{
            score += 1;
            resultDiv.innerHTML = "You win the match";
            scoreDiv.innerHTML = "Your score is " + "<b>" + score + "</b>" ;
        }
        resultDiv.style.display ="block";
        scoreDiv.style.display = "block";
    }
}
)

var stopBtn = document.querySelector(".stop")
stopBtn.onclick = () => reset()

function reset()
{
    resultDiv.style.display ="none";
    scoreDiv.style.display = "none";
    score = 0
}