import CountryInfo from "./countryInfo.jsx";


const Countries = ({list, showing, temp}) =>
{
    if (list.length === 1){
        return (
            <CountryInfo info={list[0]} temp={temp}/>
        )
    }
    if (list.length > 10)
        return (
            <p>Too many matches, specify another filter</p>
        )
    return (
        <ul>
            {
                list.map(item =>
                <li key={item.name.common}>
                    {item.show ? <CountryInfo info={item}/> : item.name.common}
                    <button type="submit" onClick={() => showing(item)}>
                        {item.show ? 'hide' : 'show'}
                    </button>
                </li>
                )}
        </ul>
    )
}

export default Countries;