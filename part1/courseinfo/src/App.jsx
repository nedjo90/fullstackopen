const Header = (props) =>
{
    return (
        <h1>{props.title}</h1>
    )
}

const Content = (props) =>
{
    return (
        <div>
            <p>{props.parts[0].name} {props.parts[0].exercises}</p>
            <p>{props.parts[1].name} {props.parts[1].exercises}</p>
            <p>{props.parts[2].name} {props.parts[2].exercises}</p>
        </div>
    )
}

const Total = (props) =>
{
    let res = 0;
    for (const item of props.parts)
        res += item.exercises;
    return (
        <p>Number of exercises {res}</p>
    )
}

const App = () => {
    const course = 'Half Stack application development'
    const parts = [
        {
            name: 'Fundamentals of React',
            exercises: 10
        },
        {
            name: 'Using props to pass data',
            exercises: 7
        },
        {
            name: 'State of a component',
            exercises: 14
        }
    ]

    return (
        <div>
            <Header title={course} />
            <Content parts={parts} />
            <Total parts={parts} />
        </div>
    )
}

export default App