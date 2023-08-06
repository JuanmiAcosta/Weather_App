import { fetchData } from './funciones.js';
//import { CITY, BTN } from './constantes.js';

const CITY = document.querySelector("#buscador input");
const BTN = document.querySelector("#buscador button");

BTN.addEventListener("mouseover", () => {
    console.log("Mouse over the button");
});

BTN.addEventListener("click", () => {

    fetchData(CITY.value)
        .then(data => {
            document.querySelector("#city-name").innerHTML = data.name; // Usamos el nuevo selector para el nombre de la ciudad
            document.querySelector("#temp").innerHTML = Math.round(data.main.temp) + "ºC";
            document.querySelector("#sen").innerHTML = data.weather[0].description;
            document.querySelector("#hum").innerHTML = data.main.humidity + "%";
            document.querySelector("#wind").innerHTML = data.wind.speed + "Km/h";
        })
        .catch(error => {
            console.log(error);
            console.log("Error al obtener los datos en script");
        });
});


/*
fetchData("Granada")
    .then(data => {
        document.querySelector("#city").innerHTML = data.name;
        document.querySelector("#temp").innerHTML = Math.round(data.main.temp) + "ºC";
        document.querySelector("#sen").innerHTML = data.weather[0].description;
        document.querySelector("#hum").innerHTML = data.main.humidity + "%";
        document.querySelector("#wind").innerHTML = data.wind.speed + "Km/h";
    })
    .catch(error => {
        console.log(error);
    });
*/