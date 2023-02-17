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

// todo: make the wining system
// todo: make a doc about how this work

// playerFun(items, playerIndex, player)
// itemInfoFun(items)

// for github

function gameResult(gameItems) {}

function gameSystem(cpu) {
    if (cpu) {
        // ! play with cpu, so make the cpu system
    } else {
        // ! play with another player, so see how win
    }
}

let dimensions = 9;

function PickXO(prop) {
    const [pgWidth, setPgWidth] = React.useState();
    let bg;

    const [gameItems, setGameItem] = React.useState(itemInfoFun(dimensions));
    // console.log("gameItems", gameItems);

    function winingSystem() {
        // for (let i = 0; i < gameItems.length; i++) {
        //     if (gameItems[i].ItemInfo.played) {
        //         console.log(gameItems[i].ItemInfo.location.index);
        //     }
        // }

        // gameItems.forEach((item, i) => {
        //     if (item.ItemInfo.played) {
        //         if (
        //             gameItems[i].ItemInfo.location.x ==
        //             gameItems[i + 1].ItemInfo.location.x
        //         ) {
        //             let row = [
        //                 gameItems[i].ItemInfo.location.index,
        //                 gameItems[i + 1].ItemInfo.location.index,
        //             ];

        //             row.push(
        //                 gameItems[i].ItemInfo.location.index,
        //                 gameItems[i + 1].ItemInfo.location.index
        //             );
        //             console.log("row", row);
        //             let rowSet = new Set(row);
        //             // if (
        //             //     rowSet.size == 1 &&
        //             //     row.length == dimensionsFun(dimensions)
        //             // ) {
        //             //     console.log("rowSet", rowSet);
        //             // }
        //         }
        //     }
        // });
        console.log(gameItems);
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
                                        ? accentFun(!prop.playWite ? "o" : "x") // ! fix this
                                        : accentFun("m")
                                }`}
                                title="click to play your turn"
                                data-played={item.ItemInfo.played}
                                onClick={() => {
                                    setGameItem((prevGameItems) => {
                                        prevGameItems[i].ItemInfo.played = true;
                                        prevGameItems[i].ItemInfo.player =
                                            prop.playWite;
                                        winingSystem();
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

                                {/* // todo: change the accent when wining */}
                            </button>
                        </div>
                    );
                })}
        </main>
    );
}

export default PickXO;
