var mainColor = [];
var redSpan = document.getElementById("red");
var blueSpan = document.getElementById("blue");
var greenSpan = document.getElementById("green");
var ballsDiv = document.getElementsByClassName("color-ball");
var resultDiv = document.querySelector(".result");
var resetBtn = document.querySelector(".resetBtn");

function getRandomColorCode(){
    var colors = [];
    colors[0] = getRandomNumber();
    colors[1] = getRandomNumber();
    colors[2] = getRandomNumber();
    return colors;
}

function getRandomNumber(){
    return Math.floor(Math.random()*256);
}

function assignColorsToBalls(){
    var randomBall = Math.floor(Math.random() * 5);
    for(var i=0; i<6; i++)
    {
        if(i==randomBall)
        {
            ballsDiv[i].style.background = `rgb(${mainColor[0]},${mainColor[1]},${mainColor[2]})`;
            ballsDiv[i].style.borderColor = `rgb(${mainColor[0]},${mainColor[1]},${mainColor[2]})`;
        }
        else{
            var temp = getRandomColorCode();
            ballsDiv[i].style.background = `rgb(${temp[0]},${temp[1]},${temp[2]})`;
            ballsDiv[i].style.borderColor = `rgb(${temp[0]},${temp[1]},${temp[2]})`;
        }
    }

}

function assignInputValue(){
   var colors = getRandomColorCode();
   console.log(colors);
   redSpan.innerText = colors[0];
   blueSpan.innerText = colors[1];
   greenSpan.innerText = colors[2];
   mainColor = colors;
   assignColorsToBalls();

}

var colorDiv = document.querySelector(".colors");
colorDiv.onclick = (event)=>{
    var element = event.target;
    console.log(element.style.background)
    if(element.style.background == `rgb(${mainColor[0]}, ${mainColor[1]}, ${mainColor[2]})`)
    {
        resultDiv.innerHTML = `<h2>Correct!</h2>`
    }
    else{
        resultDiv.innerHTML = `<h2>Wrong answer! Guess again!</h2>`;
    }
}

resetBtn.onclick = () =>{
    resultDiv.innerHTML = "";
    assignInputValue();
}

assignInputValue();

