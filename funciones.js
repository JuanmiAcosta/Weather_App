import { APIKEY, APIURL, ICON } from './constantes.js';

// Función para obtener el tiempo actual

export async function fetchData(city) {
    try {
        const response = await fetch(APIURL + city + '&appid=' + APIKEY);
        const data = await response.json();

        if (response.status == 404) {
            document.querySelector("#error").style.display = "block";
            document.querySelector("#data").style.display = "none";
        }else{
            document.querySelector("#error").style.display = "none";
            console.log(data);
            return data;
        }

        

    } catch {
        console.log("Error al obtener los datos");
        throw new Error("Error al obtener los datos");
    }
}

export function updateData(data) {
    document.querySelector("#city-name").innerHTML = data.name;
    document.querySelector("#temp").innerHTML = Math.round(data.main.temp) + "ºC";
    document.querySelector("#sen").innerHTML = data.weather[0].description;
    document.querySelector("#hum").innerHTML = data.main.humidity + "%";
    document.querySelector("#wind").innerHTML = data.wind.speed + "Km/h";
}

export function updateIcon(data) {
    /*Un switch case para actualizar el icono según el tiempo actual*/
    switch (data.weather[0].main) {
        case "Clear": //Charizard
            ICON.src = "icons/soleado_charizard.png";
            break;
        case "Clouds": //Altaria
            ICON.src = "icons/nublado_altaria.png";
            break;
        case "Rain": //Kyogre
            ICON.src = "icons/lluvia_kyogre.png";
            break;
        case "Snow": //Mamoswine
            ICON.src = "icons/nieve_mamoswine.png";
            break;
        case "Thunderstorm": //Zapdos
            ICON.src = "icons/thunderstorm_zapdos.png";
            break;
        case "Drizzle": //Wartortle
            ICON.src = "icons/llovizna_wartortle.png";
            break;
        case "Mist": //Weezing
            ICON.src = "icons/neblina_weezing.png";
            break;
        default:
            ICON.src = "icons/soleado_charizard.png";
            break;
    }



}

