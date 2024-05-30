const Persons = ({persons, altering}) =>
{
    return (
        persons.map(person =>
            <li key={person.name}>
                {person.name} {person.number}
                <button onClick={
                    () =>
                        window.confirm(`Delete ${person.name}`) ? altering(person) : ''}
                >
                delete</button>
            </li>
        )
    )
}

export default Persons;