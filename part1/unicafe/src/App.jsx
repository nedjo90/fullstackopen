import {useState} from "react";

const Header = (props) =>
{
    return (
        <h1>{props.title}</h1>
    )
}

const Button = (props) =>
{
    return (
        <button onClick={props.handleClick}>{props.text}</button>
    )
}

const StatisticLine = (props) =>
{
    return (
        <tr>
            <td>{props.text}</td>
            <td>{props.value}</td>
        </tr>
    )
}


const percentage = (n, p) =>
{
    return (p !== 0 ? n / p * 100 : 0) + " %";
}

const FeedBack = (props) =>
{
    if (props.statistics.total === 0)
    {
        return (
            <p>No feedback given</p>
        )
    }

    return (
        <div>
            <Header title="Statistics" />
            <table>
                <tbody>
                    <StatisticLine text="good" value={props.statistics.good} />
                    <StatisticLine text="neutral" value={props.statistics.neutral} />
                    <StatisticLine text="bad" value={props.statistics.bad} />
                    <StatisticLine text="all" value={props.statistics.total} />
                    <StatisticLine text="average" value={props.statistics.average} />
                    <StatisticLine text="positive" value={percentage(props.statistics.good, props.statistics.total)} />
                </tbody>
            </table>
        </div>
    )

}

const App = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    const [total, setTotal] = useState(0);
    const [average, setAverage] = useState(0);

    const goodFeedback = () =>
    {
        const updateGood = good + 1;
        setGood(updateGood);
        const updateTotal = total + 1;
        setTotal(updateTotal);
        const sum = updateGood - bad;
        setAverage(sum / updateTotal);
    }
    const neutralFeedback = () =>
    {
        const updateNeutral = neutral + 1;
        setNeutral(updateNeutral);
        const updateTotal = total + 1;
        setTotal(updateTotal);
    }
    const badFeedback = () =>
    {
        const updateBad = bad + 1;
        setBad(updateBad);
        const updateTotal = total + 1;
        setTotal(updateTotal);
        const sum = good - updateBad;
        setAverage(sum / updateTotal);
    }

    const feedback = {
        good: good,
        neutral: neutral,
        bad: bad,
        total: total,
        average: average
    }

    return (
        <div>
            <Header title="give feedback" />
            <Button handleClick={goodFeedback} text="good" value={good} />
            <Button handleClick={neutralFeedback} text="neutral" value={neutral} />
            <Button handleClick={badFeedback} text="bad" value={bad} />
            <FeedBack statistics={feedback} />
        </div>
    )
}

export default App