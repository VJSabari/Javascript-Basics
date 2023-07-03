document.addEventListener("DOMContentLoaded", function() {

var accessToken = "3649508405336525";
var BASE_PATH = `https://superheroapi.com/api.php/${accessToken}`;
var randomButton = document.getElementById("randomSearch");
var superHeroImageDiv = document.querySelector(".superHeroImage");
var superHeroDetailsDiv = document.querySelector(".superHeroDetails");
var customSearch = document.getElementById("superHeroSearch");


getSuperHero = () => {
    var input = document.getElementById("superHeroInput").value;
    var url = getNameUrl(input);
    fetch(url)
    .then(response => response.json())
    .then(json => fetchDetails(json.results[0]));
}

getRandomSuperHero = () => {
    var url = getIdRandomUrl();
    fetch(url)
    .then(response => response.json())
    .then(json => fetchDetails(json));
}

fetchDetails = (superHero) => {
    console.log(superHero)
    var img = superHero.image.url;
    superHeroImageDiv.innerHTML = `<img src=${img}>`;
    prepareDetails(superHero);
}

prepareDetails = (superHero) => {
    var res = `<h3>${superHero.name}</h3><br>`;
    var keys = Object.keys(superHero.powerstats);
    keys.map(key => {
        res += `<p><b>${key.toUpperCase()}</b> : ${superHero.powerstats[key]}</p>`;
    })
    superHeroDetailsDiv.innerHTML = res;
}

getIdRandomUrl = () => {
    var id = Math.ceil(Math.random() * 700);
    return BASE_PATH.concat(`/${id}`);

}

getNameUrl = (input) => {
    return BASE_PATH.concat(`/search/${input}`);
}

customSearch.onclick = () => {
    getSuperHero();
}

randomButton.onclick = () => {
    getRandomSuperHero();
}

});