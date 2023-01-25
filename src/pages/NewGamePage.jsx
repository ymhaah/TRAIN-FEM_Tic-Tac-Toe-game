import React from "react";
import { gsap } from "gsap";
import Button from "../components/uiComponents/Button.jsx";

function NewGamePage(prop) {
    let pageState = 1;

    return (
        <div>
            <button
                onClick={function () {
                    prop.playerIS(false);
                }}
            >
                X
            </button>
            <button
                onClick={function () {
                    prop.playerIS(true);
                }}
            >
                O
            </button>

            {/* ################### */}
            <Button
                accent="x"
                pageState={pageState}
                handelClick={function () {
                    prop.pageState(2);
                }}
            />
            <Button
                accent="o"
                pageState={pageState}
                handelClick={function () {
                    prop.playWithCpu(true);
                    prop.pageState(2);
                }}
            />
        </div>
    );
}

export default NewGamePage;
