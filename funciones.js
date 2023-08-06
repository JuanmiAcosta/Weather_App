import { APIKEY , APIURL } from './constantes.js';

// Función para obtener el tiempo actual

export async function fetchData(city){
    try{
        const response = await fetch(APIURL + city + '&appid=' + APIKEY);
        const data = await response.json();

        if (data === null) {
            console.log('La variable data es null');
          } else {
            console.log('La variable data contiene datos:', data);
          }

        console.log(data);
        return data;

    }catch{ 
        console.log("Error al obtener los datos");  
        throw new Error("Error al obtener los datos");
    }
}
