var personDiv = document.getElementById("count");
var increaseDiv = document.getElementById("count-increase");
var decreaseDiv = document.getElementById("count-decrease");
var count = Number(personDiv.innerText);
var resultDiv = document.getElementById("result");

increaseDiv.onclick = () => {
    var bill = document.getElementById("billAmount").value;
    var tip = document.getElementById("tip").value;
    var check = validateInput(bill, tip);
    if(check == false)
    {
        count += Number(1);
        updatePersonCount(count);
        calculateSplit(count, bill, tip);
    }
}

decreaseDiv.onclick = () => {
    var bill = document.getElementById("billAmount").value;
    var tip = document.getElementById("tip").value;
    var check = validateInput(bill, tip);
    if(check == false)
    {
        if(count > 1)
        {
            count -= Number(1);
            updatePersonCount(count);
            console.log(count)
            calculateSplit(count, bill, tip);
        }
        else
        {
            alert("Count cannot be less than 1")
        }

    }
}

updatePersonCount = (count) => {
    personDiv.innerText = count;
}

calculateSplit = (count, bill, tip) => {
    if(count < 1)
    {
        resultDiv.innerText = "$ ";   
    }
    else
    {
        var split = (bill * tip * 0.01)/count;
        resultDiv.innerText = "$ " + split.toFixed(2);
    }
}

function validateInput(bill, tip){
    
    var flag = 0;
    if(bill == '' || tip == '')
    {
        alert("Enter valid input");
        count = 0;
        personDiv.innerText = count;
        resultDiv.innerText = "$ ";
        flag = 1;
    }
    return (flag == 1) ? true : false;
}