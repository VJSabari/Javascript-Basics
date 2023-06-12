var higherFunctions = (actors) =>
{
    var filter = actors.filter(actor => actor.salary > 100000);
    var map = filter.map(actor => actor.name);
    console.log(map);

}

var actors = [
    {name: "Vijay", salary: 200000},
    {name : "Ajith", salary: 150000},
    {name : "Surya", salary: 100000},
    {name : "Dhanush", salary: 80000},
    {name : "Simbu", salary: 70000}
]

higherFunctions(actors);