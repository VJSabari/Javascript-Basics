var isReady;
var promise1 = new Promise(
    (resolve, reject) => {
        isReady = [true, false][Math.floor(Math.random() * 2)];
        console.log(isReady);
        isReady ? resolve("Soup is ready") : reject("No soups are available");
    }
)

const getSoup = async () =>
{
    try{
        var soup = await promise1;
        console.log(soup);
    }
    catch(error){
        console.log(error);
    }
}

getSoup();