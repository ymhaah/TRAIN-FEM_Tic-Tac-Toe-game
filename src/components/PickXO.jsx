import React from "react";
import { gsap } from "gsap";
import playerFun from "../utils/player.js";
import dimensionsFun from "../utils/dimensions.js";
import itemInfoFun from "../utils/itemInfo.js";
import accentFun from "../utils/accentFun.js";
import { setSpecialThings } from "../utils/function.js";
import XIcon from "./uiComponents/XIcon.jsx";
import OIcon from "./uiComponents/OIcon.jsx";

let duration = 0.5;
let delay = 0.1;

// todo: make a doc about how this work

// ! how to fix the error:
//? 1- remove the return
//? 2- make the winingSystem fun outside pickXO
//? 3- make the result stage pase on gameItem state

let dimensions = 9;
let Dim = dimensionsFun(dimensions);

function PickXO(prop) {
    const [pgWidth, setPgWidth] = React.useState();
    let bg;

    const [gameItems, setGameItem] = React.useState(itemInfoFun(dimensions));
    const [results, setResults] = React.useState();

    React.useEffect(() => {
        console.log(winingSystem());
    }, [winingSystem()]);

    //! if winingSystem return true => O wines, false => X wines, null => draw
    //! winingSystem change the wining items state by itself
    function winingSystem() {
        // for diagonals
        let diagonals = [[], []];
        // * diagonals[0] for the first diagonal diagonals[1] for the second diagonal
        for (let i = 0; i < dimensions; i++) {
            if (
                gameItems[i].ItemInfo.location.x +
                    gameItems[i].ItemInfo.location.y ==
                    Dim + 1 ||
                gameItems[i].ItemInfo.location.x -
                    gameItems[i].ItemInfo.location.y ==
                    0
            ) {
                if (
                    gameItems[i].ItemInfo.location.x ==
                    gameItems[i].ItemInfo.location.y
                ) {
                    diagonals[0].push(gameItems[i]);
                    if (diagonals[0].length == Dim) {
                        if (
                            diagonals[0].every(
                                (ele) => ele.ItemInfo.player == false
                            )
                        ) {
                            setSpecialThings(
                                diagonals[0],
                                gameItems,
                                (i) => {
                                    setGameItem((prevGameItems) => {
                                        prevGameItems[
                                            i.ItemInfo.location.index
                                        ].ItemInfo.wining = true;
                                        return [...prevGameItems];
                                    });
                                },
                                () => {}
                            );

                            return false;
                        }
                        if (
                            diagonals[0].every(
                                (ele) => ele.ItemInfo.player == true
                            )
                        ) {
                            setSpecialThings(
                                diagonals[0],
                                gameItems,
                                (i) => {
                                    setGameItem((prevGameItems) => {
                                        prevGameItems[
                                            i.ItemInfo.location.index
                                        ].ItemInfo.wining = true;
                                        return [...prevGameItems];
                                    });
                                },
                                (i) => {}
                            );

                            return true;
                        }
                    }
                }
                if (
                    gameItems[i].ItemInfo.location.x !=
                        gameItems[i].ItemInfo.location.y ||
                    gameItems[i].ItemInfo.location.x +
                        gameItems[i].ItemInfo.location.y ==
                        Dim + 1
                ) {
                    diagonals[1].push(gameItems[i]);
                    if (diagonals[1].length == Dim) {
                        if (
                            diagonals[1].every(
                                (ele) => ele.ItemInfo.player == false
                            )
                        ) {
                            setSpecialThings(
                                diagonals[1],
                                gameItems,
                                (i) => {
                                    setGameItem((prevGameItems) => {
                                        prevGameItems[
                                            i.ItemInfo.location.index
                                        ].ItemInfo.wining = true;
                                        return [...prevGameItems];
                                    });
                                },
                                (i) => {}
                            );

                            return false;
                        }
                        if (
                            diagonals[1].every(
                                (ele) => ele.ItemInfo.player == true
                            )
                        ) {
                            setSpecialThings(
                                diagonals[1],
                                gameItems,
                                (i) => {
                                    setGameItem((prevGameItems) => {
                                        prevGameItems[
                                            i.ItemInfo.location.index
                                        ].ItemInfo.wining = true;
                                        return [...prevGameItems];
                                    });
                                },
                                (i) => {}
                            );

                            return true;
                        }
                    }
                }
            }
        }

        // for column
        for (let i = 0; i < Dim; i++) {
            let item = i;
            let winnerColX = [];
            let winnerColO = [];

            for (item; item < dimensions; item = item + Dim) {
                if (gameItems[item].ItemInfo.player == false) {
                    // if X wins in a column
                    winnerColX.push(gameItems[item]);
                    if (winnerColX.length == Dim) {
                        setSpecialThings(
                            winnerColX,
                            gameItems,
                            (i) => {
                                setGameItem((prevGameItems) => {
                                    prevGameItems[
                                        i.ItemInfo.location.index
                                    ].ItemInfo.wining = true;
                                    return [...prevGameItems];
                                });
                            },
                            (i) => {}
                        );

                        return false;
                    }
                }
                if (gameItems[item].ItemInfo.player == true) {
                    // if O wins in a column
                    winnerColO.push(gameItems[item]);
                    if (winnerColO.length == Dim) {
                        setSpecialThings(
                            winnerColO,
                            gameItems,
                            (i) => {
                                setGameItem((prevGameItems) => {
                                    prevGameItems[
                                        i.ItemInfo.location.index
                                    ].ItemInfo.wining = true;
                                    return [...prevGameItems];
                                });
                            },
                            (i) => {}
                        );
                        return true;
                    }
                }
            }
        }

        // for rows
        for (let i = 0; i < dimensions; i = i + 3) {
            let start = i;
            let end = i + Dim;
            let winnerRowX = [];
            let winnerRowO = [];
            for (start; start < end; start++) {
                if (gameItems[start].ItemInfo.player == false) {
                    // if X wins in a row
                    winnerRowX.push(gameItems[start]);
                    if (winnerRowX.length == Dim) {
                        setSpecialThings(
                            winnerRowX,
                            gameItems,
                            (i) => {
                                setGameItem((prevGameItems) => {
                                    prevGameItems[
                                        i.ItemInfo.location.index
                                    ].ItemInfo.wining = true;
                                    return [...prevGameItems];
                                });
                            },
                            (i) => {}
                        );

                        return false;
                    }
                }
                if (gameItems[start].ItemInfo.player == true) {
                    // if O wins in a row
                    winnerRowO.push(gameItems[start]);
                    if (winnerRowO.length == Dim) {
                        setSpecialThings(
                            winnerRowO,
                            gameItems,
                            (i) => {
                                setGameItem((prevGameItems) => {
                                    prevGameItems[
                                        i.ItemInfo.location.index
                                    ].ItemInfo.wining = true;
                                    return [...prevGameItems];
                                });
                            },
                            (i) => {}
                        );

                        return true;
                    }
                }
            }
        }

        // if draw
        let draw = gameItems.every((item) => {
            return (
                item.ItemInfo.played == true && item.ItemInfo.wining == false
            );
        });
        if (draw) {
            return null;
        }
    }

    React.useEffect(() => {
        if (prop.pageState == 1) {
            bg = document.querySelector(".bg");
            setPgWidth(bg.offsetWidth);
            window.onresize = () => {
                setPgWidth(bg.offsetWidth);
                if (prop.playWite) {
                    gsap.to(bg, {
                        x: `${pgWidth + 16}px`,
                        duration: 0,
                    });
                } else {
                    gsap.to(bg, {
                        x: 0,
                        duration: 0,
                    });
                }
            };
            // todo: fix the resize problem
        } else if (
            prop.pageState == 2 &&
            !CSS.supports("aspect-ratio: 1 / 1")
        ) {
            bg = document.querySelector(".Stage2 main#Game > div:has(button)");
            setPgWidth(bg.offsetWidth);
            window.onresize = () => {
                setPgWidth(bg.offsetWidth);
                bg.style.height = pgWidth;
            };
        }
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
                                    <XIcon hover={false} accent="m" />
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
                                    <OIcon hover={false} accent="s" />
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
            {prop.pageState == 2 &&
                gameItems.map((item, i) => {
                    return (
                        <div key={item.ItemInfo.id} style={{ height: pgWidth }}>
                            <button
                                type="button"
                                className={`focus gameItem ${
                                    item.ItemInfo.wining
                                        ? accentFun(
                                              item.ItemInfo.player ? "o" : "x"
                                          )
                                        : accentFun("m")
                                }`}
                                title="click to play your turn"
                                data-played={item.ItemInfo.played}
                                onClick={() => {
                                    setGameItem((prevGameItems) => {
                                        prevGameItems[i].ItemInfo.played = true;
                                        prevGameItems[i].ItemInfo.player =
                                            prop.playWite;
                                        () => {
                                            winingSystem();
                                        };
                                        return [...prevGameItems];
                                    });
                                    prop.switchPlayer();
                                }}
                            >
                                <div className="c">
                                    {item.ItemInfo.played ? (
                                        item.ItemInfo.player ? (
                                            <OIcon
                                                hover={false}
                                                accent={
                                                    item.ItemInfo.wining
                                                        ? "m"
                                                        : "o"
                                                }
                                            />
                                        ) : (
                                            <XIcon
                                                hover={false}
                                                accent={
                                                    item.ItemInfo.wining
                                                        ? "m"
                                                        : "x"
                                                }
                                            />
                                        )
                                    ) : prop.playWite ? (
                                        <OIcon hover={true} accent="o" />
                                    ) : (
                                        <XIcon hover={true} accent="x" />
                                    )}
                                </div>
                            </button>
                        </div>
                    );
                })}
            {results === false && (
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
            )}
        </main>
    );
}

export default PickXO;
