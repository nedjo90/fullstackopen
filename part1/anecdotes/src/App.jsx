import { useState } from 'react'

const Anecdotes = ({anecdote, points}) => {
    return (
        <div>
            {anecdote}
            <br />
            has {points} votes
        </div>
    )
}

const BestAnecdote = ({anecdotes, points}) => {
    const max = points.indexOf(Math.max(...points))
    return (
        <div>
            <h1>Anecdote with most votes</h1>
            {anecdotes[max]}
            <br />
            has {points[max]} votes
        </div>
    )
}

const App = () => {
    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
        'The only way to go fast, is to go well.'
    ]

    const [selected, setSelected] = useState(0);
    const [points, setPoints] = useState([0, 0, 0, 0, 0, 0, 0, 0]);

    const randomAnecdote = () => {
        let random;
        while (true) {
            random = Math.floor(Math.random() * anecdotes.length)
            if (random !== selected) {
                setSelected(random)
                break
            }
        }
        setSelected(random);
    }

    const givePoint = () => {
        setPoints([...points.slice(0, selected), points[selected] + 1, ...points.slice(selected + 1)])
    }

    return (
        <div>
            <Anecdotes anecdote={anecdotes[selected]} points={points[selected]} />
            <button onClick={givePoint} >vote</button>
            <button onClick={randomAnecdote}>next anecdote</button>
            <BestAnecdote anecdotes={anecdotes} points={points} />
        </div>
    )
}

export default App