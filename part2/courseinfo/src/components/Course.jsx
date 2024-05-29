import React from "react";
import Header from "./Header.jsx";
import Content from "./Content.jsx";
import Total from "./Total.jsx";

const Course = ({courses}) =>
{
    return (
        courses.map(x =>
            <div key={x.id}>
                <Header name={x.name}/>
                <Content parts={x.parts}/>
                <Total parts={x.parts}/>
            </div>
        )

    )
}

export default Course