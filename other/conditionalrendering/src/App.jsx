import { useState } from 'react'

const History = (props) => {
    //debugging
    console.log("props value is", props)
    if (props.allClicks.length === 0) {
        return (
            <div>
                the app is used by pressing the buttons
            </div>
        )
    }
    return (
        <div>
            button press history: {props.allClicks.join(' ')}
        </div>
    )
}

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

const App = () => {
    const [left, setLeft] = useState(0);
    const [right, setRight] = useState(0);
    const [allClicks, setAllClicks] = useState([]);

    const handleLeftClick = () =>
    {
        setAllClicks(allClicks.concat('L'));
        const updatedLeft = left+1;
        setLeft(updatedLeft);
    }
    const handleRightClick = () =>
    {
        setAllClicks(allClicks.concat('R'));
        const updatedRight = right+1;
        setRight(updatedRight);
    }
    return (
        <div>
            {left}
            <Button handleClick={handleLeftClick} text='left'/>
            <Button handleClick={handleRightClick} text='right'/>
            {right}
            <History allClicks={allClicks} />
        </div>
    )
}

export default App
