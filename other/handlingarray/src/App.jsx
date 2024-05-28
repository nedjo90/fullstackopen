import { useState } from 'react'

const App = () => {

    const [left, setLeft] = useState(0);
    const [right, setRight] = useState(0);
    const [allClicks, setAllClicks] = useState([]);
    const [total, setTotal] = useState(0);

    const handleLeftClick = () =>
    {
        setAllClicks(allClicks.concat('L'));
        console.log("left before", left);
        const updatedLeft = left+1;
        setLeft(updatedLeft);
        console.log("left after", updatedLeft);
        setTotal(updatedLeft + right);
    }
    const handleRightClick = () =>
    {
        setAllClicks(allClicks.concat('R'));
        console.log("right before", right);
        const updatedRight = right+1;
        setRight(updatedRight);
        console.log("right after", updatedRight);
        setTotal(left + updatedRight);
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div>
                {left}
                <button onClick={handleLeftClick}>
                    left
                </button>
            </div>
            <div>
                {right}
                <button onClick={handleRightClick}>
                    right
                </button>
            </div>
            <p>History: {allClicks.join(' ')}</p>
            <p>Total: {total}</p>
        </div>
    )
}

export default App