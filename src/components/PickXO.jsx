import React from "react";
import { gsap } from "gsap";

let duration = 0.5;
let delay = 0.1;

function PickXO(prop) {
    let [pgWidth, setPgWidth] = React.useState();

    React.useEffect(() => {
        let bg = document.querySelector(".bg");
        setPgWidth(bg.offsetWidth);
        window.onresize = () => {
            setPgWidth(bg.offsetWidth);
            gsap.to(bg, {
                x: `${pgWidth + 16}px`,
                duration: 0,
            });
        };
    }, [window.innerWidth]);

    return (
        <main id="Game" className="accent-M-clr">
            {prop.pageState == 1 && (
                <>
                    <h1 className="visually-hidden">Tic Tac Toe game</h1>
                    <h2 className="p fw-b">pick player 1 mark</h2>
                    <div className="pickXO">
                        <div className="bg"></div>
                        <ul>
                            <li>
                                <button
                                    type="button"
                                    className="Button focus"
                                    onClick={function () {
                                        prop.playerIS(false);
                                        let pg = document.querySelector(".bg");
                                        gsap.to(pg, {
                                            x: 0,
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
                                    <svg
                                        width="64"
                                        height="64"
                                        className="X-icon"
                                        viewBox="0 0 64 64"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <title>X icon</title>
                                        <path
                                            d="M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z"
                                            fill="#1F3641"
                                        />
                                    </svg>
                                    <span className="visually-hidden">
                                        pick X
                                    </span>
                                </button>
                            </li>
                            <li>
                                <button
                                    type="button"
                                    className="Button focus"
                                    onClick={function () {
                                        prop.playerIS(true);
                                        let bg = document.querySelector(".bg");

                                        gsap.to(bg, {
                                            x: `${pgWidth + 16}px`,
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
                                    <svg
                                        width="64"
                                        height="64"
                                        className="O-icon"
                                        viewBox="0 0 64 64"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <title>O icon</title>
                                        <path
                                            d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z"
                                            fill="#A8BFC9"
                                        />
                                    </svg>
                                    <span className="visually-hidden">
                                        pick O
                                    </span>
                                </button>
                            </li>
                        </ul>
                    </div>

                    <p>remember : X goes first</p>
                </>
            )}
        </main>
    );
}

export default PickXO;
