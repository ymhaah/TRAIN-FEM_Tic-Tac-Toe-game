import { useState } from "react";

import Header from "./components/Header";
// import PickXO from "./components/PickXO";
// import Footer from "./components/Footer";
import Result from "./components/resultAndRestartPage";

console.log(`Made with Love by Youssef Hafnawi`);

// // todo: Header
// todo: Result & result style
// // todo: Button

// todo: make the header restart button work

function App() {
    const [pageStates, setPageStates] = useState({
        pageState: 2,
        gameResult: {
            restart: false,
            draw: false,
            winner: null,
        },
        playerX: {
            cpu: false,
            p1: true,
        },
        playerO: {
            cpu: false,
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

    function isRestart() {
        setPageStates((prevPageStates) => {
            return {
                ...prevPageStates,
                gameResult: {
                    restart: true,
                },
            };
        });
    }

    function switchPlayer() {
        setPageStates((prevPageStates) => {
            return {
                ...prevPageStates,
                currentPlayer: !prevPageStates.currentPlayer,
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
                    currentPlayer={pageStates.currentPlayer}
                    updatePageState={updatePageState}
                    isRestart={isRestart}
                />
            </div>
            {pageStates.pageState == 3 && (
                <Result
                    restart={pageStates.gameResult.restart}
                    draw={pageStates.gameResult.draw}
                    winner={pageStates.gameResult.winner}
                    // ####################################
                    updatePageState={updatePageState}
                />
            )}
        </div>
    );
}

export default App;
