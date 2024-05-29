import { useState } from 'react'
import Persons from "./components/persons.jsx";

const App = () => {
    const [persons, setPersons] = useState([
    ])
    const [newName, setNewName] = useState('')

    const handleNameChange = (event) =>
    {
        setNewName(event.target.value);
    }
    const addNewPerson = (event) =>
    {
        console.log("before add", persons);
        event.preventDefault();
        if (newName !== '' && persons.find(person => person.name === newName) === undefined)
        {
            const personObject = {
                name: newName
            }
            const updatePersons = persons.concat(personObject);
            setPersons(updatePersons);
            setNewName('');
            console.log("after add", updatePersons);
        }
    }
    return (
        <div>
            <h2>Phonebook</h2>
            <form>
                <div>
                    name: <input value={newName} onChange={handleNameChange}/>
                </div>
                <div>
                    <button type="submit" onClick={addNewPerson}>add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            <Persons persons={persons}/>
        </div>
    )
}

export default App