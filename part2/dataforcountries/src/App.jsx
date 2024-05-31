import { useState, useEffect } from 'react'
import Countries from "./components/countries.jsx";
import countryService from './services/country.js'

function App() {
    const [country, setCountry] = useState([]);
    const [countryName, setCountryName] = useState('');

    const handleSearchChange = (event) => {
        const searchedName =event.target.value;
        setCountryName(searchedName);
        searchCountry(searchedName);
    };

    const showDetails = (targetCountry) =>
    {
        setCountry(country.map(land => land !== targetCountry ? land : {...targetCountry, show: !targetCountry.show}))
    }
    const searchCountry = (searchedName) =>
    {
        countryService.getAll().then(response =>
        {
            const pattern = new RegExp('^' + searchedName, 'i');
            const matchingCountry = response.filter(
                foundCountry =>
                    foundCountry.name.common.match(pattern)
            )
            setCountry(matchingCountry);
        })
    }

    useEffect(()=>
    {
        countryService.getAll().then(response =>
        {
            setCountry(response);
        })
    }, [])

  return (
    <>
        <label htmlFor="">find countries</label>
        <input type="text" onChange={handleSearchChange}/>
        <Countries list={country} showing={showDetails}/>
    </>
  )
}

export default App
