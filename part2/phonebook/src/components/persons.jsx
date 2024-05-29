const Persons = ({persons}) =>
{
    return (
        persons.map(person =>
            <li key={person.name}>{person.name}</li>
        )
    )
}

export default Persons;