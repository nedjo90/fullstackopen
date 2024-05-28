import { useState } from 'react'

const App = () => {

    const [ counter, setCounter ] = useState(10)


    setTimeout(
        () => setCounter(counter + 1),
        1000
    )
    console.log(counter)
    return (
        <div>{counter}</div>
    )
}

export default App