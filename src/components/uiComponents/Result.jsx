import React from "react";

function Result(prop) {
    return (
        <div className={`Result focus ${accentFun(prop.accent)}`}>
            <span>{prop.result}</span>
            <span>{prop.content}</span>
        </div>
    );
}
