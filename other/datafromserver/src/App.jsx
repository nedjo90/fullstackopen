import axios from "axios";
import {
  useEffect,
  useState
} from "react";
import Content from "./components/content.jsx";
import noteService from './services/notes.js'
import Notification from "./components/notification.jsx";

function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  const [showAll, setShowAll] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null)

  const addNotes = event => {
      event.preventDefault();
      const noteObject = {
          content: newNote,
          important: Math.random() < 0.5
      }
      noteService.create(noteObject)
          .then(returnedNote =>{
              setNotes(notes.concat(returnedNote));
              setNewNote('');
          })
  }

  useEffect(() => {
      noteService.getAll()
          .then(initialNotes => {
              setNotes(initialNotes);
          });
  }, []);
  const handleNoteChange = (event) => setNewNote(event.target.value);
  const handleShowChange = () => setShowAll(!showAll);
  const notesToShow = showAll ? notes : notes.filter(note => note.important);


    const toggleChangeImportant = (id) =>
    {
        console.log(id);
        const note = notes.find(note => note.id === id);
        const updatedNote = {...note, important: !note.important};
        noteService.update(id, updatedNote)
            .then(returnedNote =>{
                setNotes(notes.map(n => n.id !== id ? n : returnedNote));
            })
            .catch(error => {
                setErrorMessage(
                    `Note '${note.content}' was already removed from server`
                )
                setTimeout(() => {
                    setErrorMessage(null)
                }, 5000)
                setNotes(notes.filter(n => n.id !== id))
            });
    }

  return (
      <div>
          <h1>Notes</h1>
          <Notification message={errorMessage}/>
          <input type="text" onChange={handleNoteChange}/>
          <button onClick={addNotes}>save</button>
          <input type="checkbox" onChange={handleShowChange}/>
          <label >Only important</label>
          <Content notes={notesToShow} toggle={toggleChangeImportant}/>
      </div>
  )
}

export default App
