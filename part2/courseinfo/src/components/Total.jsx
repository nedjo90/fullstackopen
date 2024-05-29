
const Total = ({parts}) =>
{
    let sum = parts.reduce((s, p) => s + p.exercises, 0);
    return (
        <p><b>total of {sum} exercises</b></p>
    )
}

export default Total;