import { useState } from 'react'
import Notes from "./components/Notes.jsx";

const App = (props) => {
    const [notes, setNotes] = useState(props.notes);
    const [newNotes, setNewNotes] = useState('new note');
    const [showAll, setShowAll] = useState(true);

    const notesToShow = showAll ? notes : notes.filter(note => note.important === true);

    const addNote = (event) =>
    {
        event.preventDefault();
        const noteObject = {
            id: notes.length + 1,
            content: newNotes,
            important: Math.random() < 0.5
        }
        setNotes(notes.concat(noteObject));
        setNewNotes('');
    }

    const handleNoteChange = (event) => setNewNotes(event.target.value);

    const handleFilterChange = () => setShowAll(!showAll);

    return (
        <div>
            <h1>Notes</h1>
            <Notes notes={notesToShow}/>
            <button type="checkbox" onClick={handleFilterChange}>{showAll ? 'All' : 'Important'}</button>
            <form onSubmit={addNote}>
                <input value={newNotes} onChange={handleNoteChange}/>
                <button type="submit">Save</button>
            </form>
        </div>
    )
}

export default App