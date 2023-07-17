var addButtonDiv = document.getElementById("add-task-btn");

addButtonDiv.onclick = () => {
    var task = document.getElementById("task-input").value;
    prepareTaskList(task);
    prepareCssForTaskList();
}

function prepareTaskList(task){
    var ol = document.querySelector(".tasks");
    var li = document.createElement("li");
    var text = document.createTextNode(task);
    li.appendChild(text)
    ol.appendChild(li)
}

function prepareCssForTaskList(){
    var tasks = document.querySelectorAll(".tasks li");
    for(var i=0; i<tasks.length; i++)
    {
        if(i%2!=0)
        {
            tasks[i].style.background="#ddd";
        }
        else{
            tasks[i].style.background="";
        }
    }
}

var listContainer = document.querySelector(".tasks");

listContainer.addEventListener("dblclick", function (event) {
    if(event.target.tagName == "LI")
    {
        var element = event.target;
        if(element.className != "completed")
        {
           element.classList.add("completed");
        }
        else{
            element.classList.remove("completed");
        }
    }
})

var clearCompleteBtn = document.getElementById("clear-completed");
clearCompleteBtn.onclick = () => {
    var completedTasks = document.querySelectorAll(".completed");
    completedTasks.forEach(task => {
        task.remove();
    })
    prepareCssForTaskList();
}

var clearListBtn = document.getElementById("empty-list");
clearListBtn.onclick = () => {
    document.querySelector(".tasks").innerHTML = ""
}


