import axios from "axios";


const Content = ({notes, toggle}) => {
    return(
        <div>
            {
                notes.map(note =>
                    <li key={note.id} className='note'>
                        {note.content}
                        <button onClick={()=>toggle(note.id)}>{note.important ? 'important' : 'not' +
                            ' important'}</button>
                    </li>
                )
            }
        </div>
    )
}

export default Content;