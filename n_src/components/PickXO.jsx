import React from "react";
import { gsap } from "gsap";
import XIcon from "./uiComponents/XIcon.jsx";
import OIcon from "./uiComponents/OIcon.jsx";

let duration = 0.5;
let delay = 0.1;

function PickXO(prop) {
    return (
        <main id="Game" className="accent-M-clr">
            <h1 className="visually-hidden">Tic Tac Toe game</h1>
            <h2 className="p fw-b">pick player 1 mark</h2>
            <div className="pickXO">
                <ul>
                    <li>
                        <div className="bg"></div>
                        <button
                            type="button"
                            className="Button focus"
                            onClick={() => {
                                prop.switchPlayer(false);
                                gsap.to(".bg", {
                                    right: "0",
                                    left: "0",
                                    duration: duration,
                                    delay: delay,
                                });
                                gsap.to(".pickXO .X-icon path", {
                                    duration: duration,
                                    fill: "#1F3641",
                                });
                                gsap.to(".pickXO .O-icon path", {
                                    duration: duration,
                                    fill: "#A8BFC9",
                                });
                            }}
                        >
                            <XIcon hover={false} accent="m" />
                            <span className="visually-hidden">pick X</span>
                        </button>
                    </li>
                    <li>
                        <button
                            type="button"
                            className="Button focus"
                            onClick={() => {
                                prop.switchPlayer(true);
                                gsap.to(".bg", {
                                    right: "-100%",
                                    left: "100%",
                                    duration: duration,
                                    delay: delay,
                                });
                                gsap.to(".pickXO .O-icon path", {
                                    duration: duration,
                                    fill: "#1F3641",
                                });
                                gsap.to(".pickXO .X-icon path", {
                                    duration: duration,
                                    fill: "#A8BFC9",
                                });
                            }}
                        >
                            <OIcon hover={false} accent="s" />
                            <span className="visually-hidden">pick O</span>
                        </button>
                    </li>
                </ul>
            </div>

            <p>remember : X goes first</p>
        </main>
    );
}

export default PickXO;
