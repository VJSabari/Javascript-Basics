var weatherSearchBtn = document.getElementById("weatherSearch");
var countryDiv = document.querySelector(".country");
var tempDiv = document.querySelector(".temperature");
var resultDiv = document.querySelector(".result");

const url = 'https://open-weather13.p.rapidapi.com/city';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e5deb7a89bmsh8e002e0ee12d5e1p1e0e08jsna901df68f99b',
		'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
	}
};

weatherSearchBtn.onclick = () => {
    const city = document.getElementById("userInput").value;
    getWeatherDetails(city);
}

const getWeatherDetails = async (city) => {
    var newUrl = url.concat(`/${city}`);
    try{
        let result = await fetch(newUrl, options);
        let json =  await result.json();
        countryDiv.innerHTML = `<p>${json.name}</p>`;
        let climate = json.weather[0].main;
        let temp = json.main.temp;
        let min = json.main.temp_min;
        let max = json.main.temp_max;
        tempDiv.innerHTML = `<h2 class=''type>${climate}</h2>
                             <p>Temp : ${temp}</p>
                             <p>Max-Temp : ${max}
                             <p>Min-Temp : ${min}`;
        resultDiv.style.display = "flex";                     

    }
    catch(error)
    {
        alert("Check the city name once");
    }
}


