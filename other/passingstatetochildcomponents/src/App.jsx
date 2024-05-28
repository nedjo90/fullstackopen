import { useState } from 'react'

const Display = ({counter}) => <div>{counter}</div>;

const Button = ({onSmash, text}) => <button onClick={onSmash}>{text}</button> ;

const App = () => {

    const [ counter, setCounter ] = useState(0)

    const increaseByOne = () => setCounter(counter + 1);
    const decreaseByOne = () => setCounter(counter - 1);
    const setToZero = () => setCounter(0);
    return (
        <div>
            <Display counter={counter}/>
            <Button onClick={increaseByOne} text={"+1"}/>
            <Button onClick={setToZero} text={"reset"}/>
            <Button onClick={decreaseByOne} text={"-1"}/>
        </div>
    )
}

export default App