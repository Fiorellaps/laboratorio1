// Obtener datos a URL del servidor
//import axios from "axios";

let getClients = () => {
    return fetch("https://www.breakingbadapi.com/api/characters").then(response => response.json());

}

let getClientsById = (id) => {
    return fetch("https://www.breakingbadapi.com/api/characters/" + id).then(response => response.json());
}

let getSeasonDeaths = (season) => {
    let deaths = []
    fetch("https://www.breakingbadapi.com/api/deaths?season=" + season)
        .then(response => response.data)
        .then(data => {
            for (item of data) {
                deaths.push(data)
            };
        })
    return deaths.length;
}



export {
    getClients,
    getClientsById,
    getSeasonDeaths
};