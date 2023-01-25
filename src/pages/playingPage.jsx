import React from "react";
import { gsap } from "gsap";
import Button from "../components/uiComponents/Button.jsx";

function PlayingPage(prop) {
    let pageState = 2;
    // console.log(prop.cpu);
    let c = "";
    if (prop.cpu) {
        c = "test";
    }

    return (
        <div>
            <Button accent="s" pageState={pageState} />
            <p>{c}</p>
        </div>
    );
}

export default PlayingPage;
