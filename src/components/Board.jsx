import { useState, useEffect } from "react";
import accentFun from "../utils/accentFun.js";
import XIcon from "./uiComponents/XIcon.jsx";
import OIcon from "./uiComponents/OIcon.jsx";

function Board(prop) {
    const [pgWidth, setPgWidth] = useState();

    useEffect(() => {
        if (!CSS.supports("aspect-ratio: 1 / 1")) {
            let gameBoardItem = document.querySelector(
                ".Stage2 main#Game > div:has(button)"
            );
            setPgWidth(gameBoardItem.offsetWidth);
            window.onresize = () => {
                setPgWidth(gameBoardItem.offsetWidth);
                gameBoardItem.style.height = pgWidth;
            };
        }
    }, [window.innerWidth]);

    return (
        <main id="Game" className="accent-M-clr">
            {prop.gameItems.map((item, i) => {
                return (
                    <div
                        key={item.ItemInfo.id}
                        style={{
                            height: pgWidth,
                        }}
                    >
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
                                prop.playingSystem(i);
                            }}
                        >
                            <div className="c">
                                {item.ItemInfo.played ? (
                                    item.ItemInfo.player ? (
                                        <OIcon
                                            hover={false}
                                            accent={
                                                item.ItemInfo.wining ? "m" : "o"
                                            }
                                        />
                                    ) : (
                                        <XIcon
                                            hover={false}
                                            accent={
                                                item.ItemInfo.wining ? "m" : "x"
                                            }
                                        />
                                    )
                                ) : prop.players.currentPlayer ? (
                                    <OIcon hover={true} accent="o" />
                                ) : (
                                    <XIcon hover={true} accent="x" />
                                )}
                            </div>
                        </button>
                    </div>
                );
            })}
        </main>
    );
}

export default Board;
