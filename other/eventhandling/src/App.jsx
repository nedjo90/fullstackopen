import { useState } from 'react'

const App = () => {

    const [ counter, setCounter ] = useState(0)

    const increaseByOne = () => setCounter(counter + 1);
    const decreaseByOne = () => setCounter(counter - 1);
    const setToZero = () => setCounter(0);
    return (
        <div>
            <div>{counter}</div>
            <button onClick={increaseByOne}>
                +1
            </button>
            <button onClick={decreaseByOne}>
                -1
            </button>
            <button onClick={setToZero}>
                reset
            </button>
        </div>
    )
}

export default App