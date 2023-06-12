 
const key = "a7f51a5ea412b7aebd97bd1a684c69e4"

function show (data){
    console.log(data)
    document.querySelector(".weather-city").innerHTML = "Tempo em " + data.name
    document.querySelector(".temperature").innerHTML = Math.floor(data.main.temp) + "°C"
    document.querySelector(".text-weather").innerHTML = data.weather[0].description
    document.querySelector(".moisture").innerHTML = "Umidade: " + data.main.humidity +"%"
    document.querySelector(".icon-weather").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
}

async function searchCity(city) {
const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then (response => response.json())

    show(data)
}

function clickButton() {
    const city = document.querySelector(".input-city").value

    searchCity(city) 
}