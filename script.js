import { fetchData, updateData, updateIcon } from './funciones.js';
import { CITY, BTN } from './constantes.js';

BTN.addEventListener("mouseover", () => {
    console.log("Mouse over the button");
    console.log(CITY.value);
});

document.addEventListener("DOMContentLoaded", () => {

    BTN.addEventListener("click", () => {

        event.preventDefault(); // Evitar que se envíe el formulario por defecto
        //Sin el preventDefault, el formulario se envía y se recarga la página, por lo que no se puede ver el resultado de la petición

        fetchData(CITY.value)
            .then(data => {

                updateData(data);
                updateIcon(data);
                document.querySelector("#data").style.display = "block";

            })
            .catch(error => {
                console.log(error);
            });
    });
});


/*
fetchData("Granada")
    .then(data => {
        document.querySelector("#city-name").innerHTML = data.name;
        document.querySelector("#temp").innerHTML = Math.round(data.main.temp) + "ºC";
        document.querySelector("#sen").innerHTML = data.weather[0].description;
        document.querySelector("#hum").innerHTML = data.main.humidity + "%";
        document.querySelector("#wind").innerHTML = data.wind.speed + "Km/h";
    })
    .catch(error => {
        console.log(error);
    });
*/