import { useState } from "react";

import Header from "./components/Header";
import PickXO from "./components/PickXO";
import Footer from "./components/Footer";
import Result from "./components/resultAndRestartPage";

console.log(`Made with Love by Youssef Hafnawi`);

/*
// todo: Header
// todo: Result & restart
// todo: Button
// todo: make the header restart button work
// todo: stage 1
// todo: header
// todo: pick x o
// todo: footer
todo: stage 1 transition animation
    // todo: footer buttons
    todo: pick x o
    todo: header

todo: game board

*/

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
        },
        currentPlayer: false,
    });

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
                    draw: prevPageStates.gameResult.draw,
                    winner: prevPageStates.gameResult.winner,
                    history: {
                        xWins: prevPageStates.gameResult.history.xWins,
                        oWins: prevPageStates.gameResult.history.oWins,
                        draw: prevPageStates.gameResult.history.draw,
                    },
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
                    currentPlayer={pageStates.currentPlayer}
                    isRestart={isRestart}
                />
                {pageStates.pageState == 1 && (
                    <PickXO
                        currentPlayer={pageStates.currentPlayer}
                        switchPlayer={switchPlayer}
                    />
                )}

                <Footer
                    pageState={pageStates.pageState}
                    updatePageState={updatePageState}
                    history={pageStates.gameResult.history}
                    players={pageStates.players}
                    playWithCpu={playWithCpu}
                />
            </div>

            {pageStates.pageState == 3 && (
                <Result
                    restart={pageStates.gameResult.restart}
                    draw={pageStates.gameResult.draw}
                    winner={pageStates.gameResult.winner}
                    players={pageStates.players}
                    // ####################################
                    updatePageState={updatePageState}
                />
            )}
        </div>
    );
}

export default App;
