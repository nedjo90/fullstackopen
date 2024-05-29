import React from "react";

const PersonForm = (props) =>
{
    return (
        <form>
            <div>
                name: <input value={props.newName} onChange={props.nameChange}/>
                <br/>
                number: <input value={props.newNumber} onChange={props.numberChange}/>
            </div>
            <div>
                <button type="submit" onClick={props.addNewPerson}>add</button>
            </div>
        </form>
    )
}

export default PersonForm;