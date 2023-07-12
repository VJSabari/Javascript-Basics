var isReady;
var promise1 = new Promise(
    (resolve, reject) => {
        isReady = [true, false][Math.floor(Math.random() * 2)];
        console.log(isReady);
        isReady ? resolve("Soup is ready") : reject("No soups are available");
    }
)

console.log(promise1
    .then(success => console.log(success))
    .catch(error => console.log(error)));