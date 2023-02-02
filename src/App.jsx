import { useState } from "react";
import "./index.css";
import Header from "./components/Header";
import PickXO from "./components/PickXO";
import Footer from "./components/Footer";
import Result from "./components/resultAndRestartPage";

console.log(`Made with Love by Youssef Hafnawi`);

function App() {
    const [pageState, setPageState] = useState(1);
    const [cpu, setCpu] = useState(false);
    const [playWite, setPlayWite] = useState(false); // ! true =  O , false = X

    const [restart, setRestart] = useState(false);

    function updatePageState(state) {
        setPageState(state);
    }
    function playerIS(player) {
        setPlayWite(player);
    }
    function playWithCpu(state) {
        setCpu(state);
    }
    function isRestart() {
        setRestart(true);
        setPageState(3);
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
            <div className={`Container Stage${pageState}`}>
                <Header pageState={pageState} isRestart={isRestart} />
                <PickXO pageState={pageState} playerIS={playerIS} />
                <Footer
                    pageState={pageState}
                    updatePageState={updatePageState}
                    playWithCpu={playWithCpu}
                />
            </div>
            {pageState == 3 && <Result />}
            {/* // * finish his state */}
        </div>
    );
}

export default App;
