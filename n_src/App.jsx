import { useState } from "react";

import Header from "./components/Header";
import PickXO from "./components/PickXO";
import Footer from "./components/Footer";
import Board from "./components/Board";
import Score from "./components/Score";
import Result from "./components/resultAndRestartPage";

import dimensionsFun from "./utils/dimensions";
import itemInfoFun from "./utils/itemInfo";
import randomNum from "./utils/randomNum";
import setSpecialThings from "./utils/setSpecialThingsFun";

console.log(`Made with 💙 by Youssef Hafnawi`);

/*
// todo: Header
// todo: Result & restart
// todo: Button
// todo: make the header restart button work
// todo: stage 1
// todo: header
// todo: pick x o
// todo: footer
// todo: stage 1 transition animation
    // todo: footer buttons
    // todo: pick x o
todo: game board
    // todo: game board items
    // todo: game board items animation
    todo: the winning system
        // todo: send me to stage 3 with the right state
        // todo: update game score
    ! todo: cpu 

*/

let dimensions = 9;
let Dim = dimensionsFun(dimensions);

let toStage3 = 700;

function App() {
    const [pageStates, setPageStates] = useState({
        pageState: 1,
        gameResult: {
            restart: false,
            draw: false,
            winner: null,
            history: {
                xWins: 0,
                oWins: 0,
                draw: 0,
            },
        },
        players: {
            cpu: {
                playingWith: false,
                cpuPlayer: null,
            },
            p1: false,
            currentPlayer: false,
        },
    });

    console.log(pageStates);
    const [gameItems, setGameItem] = useState(itemInfoFun(dimensions));

    function draw() {
        setPageStates((prevPageStates) => {
            return {
                ...prevPageStates,
                gameResult: {
                    restart: false,
                    draw: true,
                    winner: null,
                    history: {
                        xWins: prevPageStates.gameResult.history.xWins,
                        oWins: prevPageStates.gameResult.history.oWins,
                        draw: prevPageStates.gameResult.history.draw++,
                    },
                },
            };
        });
        setTimeout(() => {
            updatePageState(3);
        }, toStage3);
    }

    function oWins() {
        setPageStates((prevPageStates) => {
            return {
                ...prevPageStates,
                gameResult: {
                    restart: false,
                    draw: false,
                    winner: true,
                    history: {
                        xWins: prevPageStates.gameResult.history.xWins,
                        oWins: prevPageStates.gameResult.history.oWins++,
                        draw: prevPageStates.gameResult.history.draw,
                    },
                },
            };
        });
        setTimeout(() => {
            updatePageState(3);
        }, toStage3);
    }

    function xWins() {
        setPageStates((prevPageStates) => {
            return {
                ...prevPageStates,
                gameResult: {
                    restart: false,
                    draw: false,
                    winner: false,
                    history: {
                        xWins: prevPageStates.gameResult.history.xWins++,
                        oWins: prevPageStates.gameResult.history.oWins,
                        draw: prevPageStates.gameResult.history.draw,
                    },
                },
            };
        });
        setTimeout(() => {
            updatePageState(3);
        }, toStage3);
    }

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
                            // if x wins
                            diagonals[0].forEach((i) => {
                                setGameItem((prevGameItems) => {
                                    prevGameItems[
                                        i.ItemInfo.location.index
                                    ].ItemInfo.wining = true;
                                    return [...prevGameItems];
                                });
                            });
                            xWins();
                        }
                        if (
                            diagonals[0].every(
                                (ele) => ele.ItemInfo.player == true
                            )
                        ) {
                            // if o wins
                            diagonals[0].forEach((i) => {
                                setGameItem((prevGameItems) => {
                                    prevGameItems[
                                        i.ItemInfo.location.index
                                    ].ItemInfo.wining = true;
                                    return [...prevGameItems];
                                });
                            });
                            oWins();
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
                            // if x wins
                            diagonals[1].forEach((i) => {
                                setGameItem((prevGameItems) => {
                                    prevGameItems[
                                        i.ItemInfo.location.index
                                    ].ItemInfo.wining = true;
                                    return [...prevGameItems];
                                });
                            });
                            xWins();
                        }
                        if (
                            diagonals[1].every(
                                (ele) => ele.ItemInfo.player == true
                            )
                        ) {
                            // if o wins
                            diagonals[1].forEach((i) => {
                                setGameItem((prevGameItems) => {
                                    prevGameItems[
                                        i.ItemInfo.location.index
                                    ].ItemInfo.wining = true;
                                    return [...prevGameItems];
                                });
                            });
                            oWins();
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
                        winnerColX.forEach((i) => {
                            setGameItem((prevGameItems) => {
                                prevGameItems[
                                    i.ItemInfo.location.index
                                ].ItemInfo.wining = true;
                                return [...prevGameItems];
                            });
                        });
                        xWins();
                    }
                }
                if (gameItems[item].ItemInfo.player == true) {
                    // if O wins in a column
                    winnerColO.push(gameItems[item]);
                    if (winnerColO.length == Dim) {
                        winnerColO.forEach((i) => {
                            setGameItem((prevGameItems) => {
                                prevGameItems[
                                    i.ItemInfo.location.index
                                ].ItemInfo.wining = true;
                                return [...prevGameItems];
                            });
                        });
                        oWins();
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
                        winnerRowX.forEach((i) => {
                            setGameItem((prevGameItems) => {
                                prevGameItems[
                                    i.ItemInfo.location.index
                                ].ItemInfo.wining = true;
                                return [...prevGameItems];
                            });
                        });
                        xWins();
                    }
                }
                if (gameItems[start].ItemInfo.player == true) {
                    // if O wins in a row
                    winnerRowO.push(gameItems[start]);
                    if (winnerRowO.length == Dim) {
                        winnerRowO.forEach((i) => {
                            setGameItem((prevGameItems) => {
                                prevGameItems[
                                    i.ItemInfo.location.index
                                ].ItemInfo.wining = true;
                                return [...prevGameItems];
                            });
                        });
                        oWins();
                    }
                }
            }
        }

        // if draw
        let d = gameItems.every((item) => {
            return (
                item.ItemInfo.played == true && item.ItemInfo.wining == false
            );
        });
        if (d) {
            draw();
        }
    }

    // {
    //     "ItemInfo": {
    //         "id": "fe5fbe4f-6bde-4dc6-ab10-28e9791cb24f",
    //         "played": false,
    //         "player": null,
    //         "location": {
    //             "index": 0,
    //             "x": 1,
    //             "y": 1
    //         },
    //         "wining": false
    //     }
    // },

    function CPU() {
        // playingSystem(i)
        // gameItems[].ItemInfo
        if (
            gameItems.every((item) => {
                return !item.ItemInfo.played;
            })
        ) {
            // if it is the first move
            let rand = randomNum(0, 8);
            changeCurrentPlayer();
            playingSystem(rand);
        } else {
            // if it is not the first move
        }
    }

    function playingWithCpu() {
        if (pageStates.pageState >= 2 && pageStates.players.cpu.playingWith) {
            if (pageStates.players.cpu.cpuPlayer === true) {
                // cpu playing with O

                if (
                    pageStates.players.currentPlayer ===
                    pageStates.players.cpu.cpuPlayer
                ) {
                    CPU();
                }
            } else if (pageStates.players.cpu.cpuPlayer === false) {
                // cpu playing with X

                if (
                    pageStates.players.currentPlayer ===
                    pageStates.players.cpu.cpuPlayer
                ) {
                    CPU();
                }
            }
        }
    }

    playingWithCpu();

    function nextRound() {
        setGameItem(itemInfoFun(dimensions));
        setPageStates((prevPageStates) => {
            return {
                ...prevPageStates,
                players: {
                    cpu: {
                        playingWith: prevPageStates.players.cpu.playingWith,
                        cpuPlayer: prevPageStates.players.cpuPlayer,
                    },
                    p1: prevPageStates.players.p1,
                    currentPlayer: false,
                },
            };
        });
    }

    function quit() {
        setGameItem(itemInfoFun(dimensions));
        setPageStates((prevPageStates) => {
            return {
                ...prevPageStates,
                gameResult: {
                    restart: false,
                    draw: false,
                    winner: null,
                    history: {
                        xWins: 0,
                        oWins: 0,
                        draw: 0,
                    },
                },
            };
        });
    }

    function playingSystem(i) {
        setGameItem((prevGameItems) => {
            prevGameItems[i].ItemInfo.played = true;
            prevGameItems[i].ItemInfo.player = pageStates.players.currentPlayer;
            winingSystem();
            return [...prevGameItems];
        });
    }

    function updatePageState(pageState) {
        setPageStates((prevPageStates) => {
            return {
                ...prevPageStates,
                pageState: pageState,
            };
        });
    }

    function playWithCpu() {
        setPageStates((prevPageStates) => {
            return {
                ...prevPageStates,
                players: {
                    cpu: {
                        playingWith: true,
                        cpuPlayer: !prevPageStates.players.p1,
                    },
                    p1: prevPageStates.players.p1,
                    currentPlayer: prevPageStates.players.currentPlayer,
                },
            };
        });
    }

    function isRestart() {
        setPageStates((prevPageStates) => {
            return {
                ...prevPageStates,
                pageState: 3,
                gameResult: {
                    restart: true,
                    draw: false,
                    winner: null,
                    history: {
                        xWins: prevPageStates.gameResult.history.xWins,
                        oWins: prevPageStates.gameResult.history.oWins,
                        draw: prevPageStates.gameResult.history.draw,
                    },
                },
            };
        });
    }

    function changeCurrentPlayer() {
        setPageStates((prevPageStates) => {
            return {
                ...prevPageStates,
                players: {
                    cpu: {
                        playingWith: prevPageStates.players.cpu.playingWith,
                        cpuPlayer: prevPageStates.players.cpu.cpuPlayer,
                    },
                    p1: prevPageStates.players.p1,
                    currentPlayer: !prevPageStates.players.currentPlayer,
                },
            };
        });
    }

    function switchPlayer(player) {
        setPageStates((prevPageStates) => {
            return {
                ...prevPageStates,
                players: {
                    cpu: {
                        playingWith: prevPageStates.players.cpu.playingWith,
                        cpuPlayer: prevPageStates.players.cpu.cpuPlayer,
                    },
                    p1: player,
                    currentPlayer: prevPageStates.players.currentPlayer,
                },
            };
        });
    }

    return (
        <div className="App">
            <a
                href="#Game"
                className="visually-hidden"
                title="click Enter to skip navigation menu"
            >
                skip to the content
            </a>
            <div className={`Container Stage${pageStates.pageState}`}>
                <Header
                    pageState={pageStates.pageState}
                    // ####################################
                    currentPlayer={pageStates.players.currentPlayer}
                    isRestart={isRestart}
                />
                {pageStates.pageState == 1 && (
                    <>
                        <PickXO
                            currentPlayer={pageStates.players.currentPlayer}
                            switchPlayer={switchPlayer}
                        />
                        <Footer
                            updatePageState={updatePageState}
                            playWithCpu={playWithCpu}
                        />
                    </>
                )}
                {pageStates.pageState >= 2 && (
                    <>
                        <Board
                            gameItems={gameItems}
                            playingSystem={playingSystem}
                            players={pageStates.players}
                            changeCurrentPlayer={changeCurrentPlayer}
                            CPU={CPU}
                        />
                        <Score
                            history={pageStates.gameResult.history}
                            players={pageStates.players}
                        />
                    </>
                )}
            </div>

            {pageStates.pageState == 3 && (
                <Result
                    restart={pageStates.gameResult.restart}
                    draw={pageStates.gameResult.draw}
                    winner={pageStates.gameResult.winner}
                    players={pageStates.players}
                    // ####################################
                    updatePageState={updatePageState}
                    nextRound={nextRound}
                    quit={quit}
                />
            )}
        </div>
    );
}

export default App;
