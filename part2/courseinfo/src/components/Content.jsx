import React from "react";

const Content = ({parts}) =>
{
    return (
        parts.map( x =>
            <p key={x.id}>{x.name} {x.exercises}</p>
        )
    )
}

export default Content;