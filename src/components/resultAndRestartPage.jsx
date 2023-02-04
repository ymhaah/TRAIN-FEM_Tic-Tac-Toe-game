import React from "react";
import Button from "./uiComponents/Button.jsx";

function Result() {
    let pageState = 3;

    return (
        <div id="result-and-restart">
            <p>Lorem ipsum dolor sit.</p>
            <h1>Lorem ipsum dolor sit</h1>
            <Button
                accent="x"
                pageState={pageState}
                handelClick={function () {
                    console.log("test");
                }}
            />
        </div>
    );
}

export default Result;
