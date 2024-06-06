import axios from "axios";


const getAll = async (lat, lon, key) => {
    const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${key}`
    return await axios.get(url)
        .then(response => response.data);
}

export default {getAll}