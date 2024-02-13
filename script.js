const container = document.querySelector(".container");
const search = document.querySelector(".search-box button");
const weatherBox = document.querySelector(".weather-box");
const weatherDetails = document.querySelector(".weather-details");

const APIKey = "13e012767ad83d8e7d1484c35e9fbc0d";

const image = document.querySelector(".weather-box img");
const temperature = document.querySelector(".weather-box .temperature");
const description = document.querySelector(".weather-box .description");
const humidity = document.querySelector(".weather-details .humidity span");
const wind = document.querySelector(".weather-details .wind span");

function showWeatherdata(data) {
    temperature.innerHTML=data.main.temp + "°C";
    humidity.innerHTML=data.main.humidity;

    if(image.src=data.weather[0].main=="Clear"){
        image.src='clear.png';
    }
    else if(image.src=data.weather[0].main=="Cloud"){
        image.src='cloud.png';
    }
    else if(image.src=data.weather[0].main=="Mist"){
        image.src='mist.png';
    }
    else if(image.src=data.weather[0].main=="Rain"){
        image.src='rain.png';
    }
    else if(image.src=data.weather[0].main=="Snow"){
        image.src='snow.png';
    }
    else{
        image.src='clear.png';
    }

}

async function resp(temp) {
  let response = await fetch(temp);
  let data = await response.json();
  showWeatherdata(data);
  console.log(data);
}

search.addEventListener("click", () => {
  const city = document.querySelector("#cityinput").value;
  const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=metric`;
  if (city == "") return;

  resp(api);
});
