import './App.css'
import axios from "axios";
import {
  useEffect,
  useState
} from "react";

function App() {
  const[notes, setNotes] = useState([]);
  const[newNote, setNewNote] = useState('');
  const [showAll, setShowAll] = useState(true);

  const hook = () => {
      console.log('effect');
      axios.get('http://localhost:3001/notes')
          .then(response => {
              console.log('promise fulfilled');
              setNotes(response.data)
          });
  };

  useEffect(hook, []);
  console.log('render', notes.length, 'notes');
  return (
    <div></div>
  )
}

export default App
