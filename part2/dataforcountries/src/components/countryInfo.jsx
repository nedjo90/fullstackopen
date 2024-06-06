import CountryWeather from "./countryWeather.jsx";


const CountryInfo = ({info}) => {
    const languages = Object.keys(info.languages)
        .map(key => info.languages[key]);
    return (

        <div>
            <h2>{info.name.common}</h2>
            <p>capital {info.capital[0]}</p>
            <p>area {info.area}</p>
            <h3>languages:</h3>
            <ul>
                {languages.map(language => <li key={language}>{language}</li>)}
            </ul>
            <img src={info.flags["png"]} alt={info.flags["alt"]}/>
            <CountryWeather country={info}/>
        </div>
    );
};

export default CountryInfo;