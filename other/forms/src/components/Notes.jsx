import React from "react";



const Notes = (props) =>
{
    return (
        <ul>{props.notes.map( note =>
                <li key={note.id}>{note.content}</li>)
        }
        </ul>
        )
}

export default Notes;