const apiKey = "f16c349f9195334d0f103402e0e3fe61";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const weatherIcon = document.querySelector(".weather-icon")
const searchField = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkJustNowWeather(city){
    const response = await fetch(apiURL + city + `&appid=${apiKey}`)
    var data = await response.json();

    if(response.status == 404){
        document.querySelector(".invalid").style.visibility = "visible"
        document.querySelector(".weather").style.visibility = "hidden"

    }
    else{
        document.querySelector(".invalid").style.visibility = "hidden"
    
    let weatherType = data.weather[0].main
    // console.log(weatherType)
    if(weatherType == "Fog"){
        weatherIcon.src = "images/snow.png"
    }
    else if(weatherType == "Clouds"){
        weatherIcon.src = "images/clouds.png"
    }
    else if(weatherType == "Drizzle"){
        weatherIcon.src = "images/drizzle.png"
    }
    else if(weatherType == "Rain"){
        weatherIcon.src = "images/rain.png"
    }
    else if(weatherType == "Mist"){
        weatherIcon.src = "images/mist.png"
    }

    document.querySelector(".weather").style.visibility = "visible"
    }

    document.querySelector(".city-name").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =Math.round(data.main.temp) +"°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
    document.querySelector(".wind").innerHTML = data.wind.speed +"km/h";

    

}



searchBtn.addEventListener("click", ()=>{
    let cityName = searchField.value;
    checkJustNowWeather(cityName)
})