function validateUser()
{
    var name = document.getElementById("uname").value;
    var passwd = document.getElementById("upass").value;
    if(passwd == "Sabari@123")
    {
        alert("Login successful");
        alert("Welcome "+name);
    }
    else{
        alert("Invalid password");
    }
}

function validateCorrectAnswer()
{
    var options = [document.getElementById("lion"), document.getElementById("elephant"), document.getElementById("tiger")];
    if(options[0].checked == true)
    {
        alert("Wrong answer. Tiger is the correct answer");
    }
    else if(options[1].checked == true){
        alert("Wrong answer. Tiger is the correct answer");
    }
    else if(options[2].checked == true)
    {
        alert("Right answer");
    }
    else{
        alert("No option is selected. Please select an option");
    }
}

function validateLoser()
{
    var team = document.getElementById("team");
    if(team.options[team.selectedIndex].value == "rcb")
    {
        alert("Right answer");
    }
    else{
        alert("Wrong answer. RCB is the correct answer");
    }
}