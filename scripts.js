

const key = "da76e15f3c0adcd6c1e2676fab867770"

function print_on_screen (dados) {
    document.querySelector("#temp_in_city").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "ºC"
    document.querySelector(".text-forecast").innerHTML = dados.weather[0].description
    document.querySelector(".text-moisture").innerHTML = "Umidade do ar: " + dados.main.humidity + "%"
    document.querySelector(".img-forecast").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

async function search_city (city) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())

    print_on_screen(dados)   
}

function button_clicked () {
    const city = document.querySelector("#city-name").value

    search_city(city)
}