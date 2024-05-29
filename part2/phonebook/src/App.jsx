import React, { useState } from 'react'
import Persons from "./components/persons.jsx";
import PersonForm from "./components/PersonForm.jsx";
import Filter from "./components/Filter.jsx";


const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456', id: 1 },
        { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
        { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
        { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
    ]);
    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState('');
    const [filter, setFilter] = useState('');

    const handleNameChange = (event) => setNewName(event.target.value);
    const handleNumberChange = (event) => setNewNumber(event.target.value);
    const handleFilterChange = (event) => setFilter(event.target.value)

    const personsFiltered = () =>
    {
        if (filter === '')
            return persons;
        return persons.filter(person => person.name.includes(filter));
    }

    const addNewPerson = (event) =>
    {
        event.preventDefault();

        let message = '';
        if (persons.find(person => person.name === newName) !== undefined)
            message.concat(`${newName} is already add to phonebook\n`);
        if(persons.find(person => person.number === newNumber) !== undefined )
            message.concat(`${newNumber} is already add to phonebook\n`);
        if (message !== '')
        {
            alert(message);
            return;
        }
        const personObject = {
            name: newName,
            number: newNumber
        }
        const updatePersons = persons.concat(personObject);
        setPersons(updatePersons);
    }
    return (
        <div>
            <h2>Phonebook</h2>
            <Filter filter={filter} changeFilter={handleFilterChange} />
            <h2>add a new</h2>
            <PersonForm newName={newName} newNumber={newNumber} nameChange={handleNameChange} numberChange={handleNumberChange} addNewPerson={addNewPerson}/>
            <h2>Numbers</h2>
            <Persons persons={personsFiltered()}/>
        </div>
    )
}

export default App