//5fe059274fcb65a27fdfe0ec9f9657f6
let apiKey = "5fe059274fcb65a27fdfe0ec9f9657f6";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let searchBox = document.querySelector('.search input');
let searchBtn = document.querySelector('.search button');
let weatherIcon = document.querySelector('.weather-icon');

async function checkWeather(city){
  let response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  let data = await response.json(); // Move this up to use data for checking weather conditions

  if(response.status == 404){
    document.querySelector('.error').style.display = "block";
    document.querySelector('.weather').style.display = "none";
  } else {
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + '&deg;c';
    document.querySelector(".humidity").innerHTML = data.main.humidity + '%';
    document.querySelector(".wind").innerHTML = data.wind.speed + ' km/hr';

    if(data.weather[0].main == "Clouds"){
      weatherIcon.src = "images/clouds.png";
    } else if(data.weather[0].main == "Clear"){
      weatherIcon.src = "images/clear.png";
    } else if(data.weather[0].main == "Rain"){
      weatherIcon.src = "images/rain.png";
    } else if(data.weather[0].main == "Drizzle"){ // Fixed spelling mistake here
      weatherIcon.src = "images/drizzle.png";
    } else if(data.weather[0].main == "Mist"){
      weatherIcon.src = "images/mist.png";
    } else if(data.weather[0].main == "Snow"){
      weatherIcon.src = "images/snow.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector('.error').style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
