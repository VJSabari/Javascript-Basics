var fruits = ["apple", "orange", "mango", "pineapple", "watermelon"];
for(let i=0; i<fruits.length; i++)
{
    console.log(fruits[i]);
}

var vegetables = ["cucumber", "carrot", "brinjal", "tomato", "ginger"];
for(const vegetble of vegetables)
{
    console.log(vegetble);
}

for(var fruit in fruits)
{
    console.log(fruit);
}