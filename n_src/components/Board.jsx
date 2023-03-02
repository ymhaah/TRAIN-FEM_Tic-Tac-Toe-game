import React from "react";
import accentFun from "../utils/accentFun.js";
import XIcon from "./uiComponents/XIcon.jsx";
import OIcon from "./uiComponents/OIcon.jsx";

function Board(prop) {
    const [pgWidth, setPgWidth] = React.useState();

    React.useEffect(() => {
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
                                prop.changeCurrentPlayer();
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
/*
    [
    {
        "ItemInfo": {
            "id": "fe5fbe4f-6bde-4dc6-ab10-28e9791cb24f",
            "played": false,
            "player": null,
            "location": {
                "index": 0,
                "x": 1,
                "y": 1
            },
            "wining": false
        }
    },
    {
        "ItemInfo": {
            "id": "4ad075d5-e4a9-4e64-8f63-6246ff6a1960",
            "played": false,
            "player": null,
            "location": {
                "index": 1,
                "x": 1,
                "y": 2
            },
            "wining": false
        }
    },
    {
        "ItemInfo": {
            "id": "ade84ec8-6386-4fed-b434-d6d8c5247721",
            "played": false,
            "player": null,
            "location": {
                "index": 2,
                "x": 1,
                "y": 3
            },
            "wining": false
        }
    },
    {
        "ItemInfo": {
            "id": "2d9a12c8-9ec3-4e04-b48c-0223c433231a",
            "played": false,
            "player": null,
            "location": {
                "index": 3,
                "x": 2,
                "y": 1
            },
            "wining": false
        }
    },
    {
        "ItemInfo": {
            "id": "0403c06e-f987-4411-b3b8-6c5ac833f8d3",
            "played": false,
            "player": null,
            "location": {
                "index": 4,
                "x": 2,
                "y": 2
            },
            "wining": false
        }
    },
    {
        "ItemInfo": {
            "id": "5b301b47-cb21-41c9-86d6-98508afb5db2",
            "played": false,
            "player": null,
            "location": {
                "index": 5,
                "x": 2,
                "y": 3
            },
            "wining": false
        }
    },
    {
        "ItemInfo": {
            "id": "270fec99-b108-4dc1-a89f-e3ee9b05d0e4",
            "played": false,
            "player": null,
            "location": {
                "index": 6,
                "x": 3,
                "y": 1
            },
            "wining": false
        }
    },
    {
        "ItemInfo": {
            "id": "ff4d76ec-a7b6-4077-8dc0-2abc3eb82db4",
            "played": false,
            "player": null,
            "location": {
                "index": 7,
                "x": 3,
                "y": 2
            },
            "wining": false
        }
    },
    {
        "ItemInfo": {
            "id": "45040218-14b0-48b6-b63f-018e6ac25cf1",
            "played": false,
            "player": null,
            "location": {
                "index": 8,
                "x": 3,
                "y": 3
            },
            "wining": false
        }
    }
]
    */
