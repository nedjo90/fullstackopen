import {
    useEffect,
    useState
} from "react";
import weatherService from "../services/weather.js";

const CountryWeather = ({country}) => {
    const api_key = import.meta.env.VITE_OW_KEY;
    const [countryWeather, setCountryWeather] = useState(null);
    useEffect(
        () => {
            weatherService.getAll(country.latlng[0], country.latlng[1], api_key)
                .then(response => {
                    setCountryWeather(response);
                });
        },
        []
    );
    console.log(countryWeather);
    if (!countryWeather)
        return null;
    const imgUrl = "https://openweathermap.org/img/wn/" + countryWeather.current.weather[0].icon + "@2x.png";
    return (
        <>
            <p>temperature {countryWeather.current.temp}</p>
            <img src={imgUrl}
                 alt={countryWeather.current.weather[0].description}/>
            <p>wind {countryWeather.current.wind_speed} m/s</p>
        </>
    );
};

export default CountryWeather;