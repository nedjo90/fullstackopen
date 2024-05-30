import React, {
    useEffect,
    useState
} from 'react';
import Persons from "./components/persons.jsx";
import PersonForm from "./components/PersonForm.jsx";
import Filter from "./components/Filter.jsx";
import axios from "axios";
import personsServices from './services/persons.js'


const App = () => {
    const [persons, setPersons] = useState([]);
    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState('');
    const [filter, setFilter] = useState('');

    useEffect(() => {
        axios.get('http://localhost:3001/persons')
            .then(response =>
            {
                setPersons(response.data);
            })
    }, []);

    const handleNameChange = (event) => setNewName(event.target.value);
    const handleNumberChange = (event) => setNewNumber(event.target.value);
    const handleFilterChange = (event) => setFilter(event.target.value)

    const personsFiltered = () =>
    {
        if (filter === '')
            return persons;
        return persons.filter(person => person.name.includes(filter));
    }

    const removePerson = (id) =>
    {
        personsServices
            .remove(id)
            .then(
                () => setPersons(persons.filter(person => person.id !== id))
            );
    }

    const updateNumber = (changedPerson) =>
    {
        if (window.confirm(`${changedPerson.name} is already added to phonebook, replace the old number with a new one ?`))
        {
            personsServices
                .update(changedPerson.id, changedPerson)
                .then( returnedPerson => {
                    setPersons(persons.map(
                        person => person.id !== returnedPerson.id ? person : returnedPerson
                    ))
                });
        }
    }

    const addNewPerson = (event) =>
    {
        event.preventDefault();

        const existingPerson = persons.find(person => person.name.toLowerCase() === newName.toLowerCase());
        const personObject = {
            name: newName,
            number: newNumber
        }
        if(!existingPerson)
        {
            personsServices
                .create(personObject)
                .then(returnedPerson => setPersons(persons.concat(returnedPerson)));
        }
        else if (existingPerson && existingPerson.number !== newNumber)
        {
            personObject.id = existingPerson.id;
            updateNumber(personObject);
        }
    }
    return (
        <div>
            <h2>Phonebook</h2>
            <Filter filter={filter} changeFilter={handleFilterChange} />
            <h2>add a new</h2>
            <PersonForm newName={newName} newNumber={newNumber} nameChange={handleNameChange} numberChange={handleNumberChange} addNewPerson={addNewPerson}/>
            <h2>Numbers</h2>
            <Persons persons={personsFiltered()} altering={removePerson}/>
        </div>
    )
}

export default App