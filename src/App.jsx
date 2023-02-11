import { useState } from "react";
import "./index.css";
import Header from "./components/Header";
import PickXO from "./components/PickXO";
import Footer from "./components/Footer";
import Result from "./components/resultAndRestartPage";

console.log(`Made with Love by Youssef Hafnawi`);

/*
todo: we start with X to O and repeat
todo: when click on the item the svg change to the solid v
todo: update itemInfo.player when click and make it change once (maybe close click event)

todo: the result system
    todo: the when we win system // ! you can use the wining colum idea (the 8 colum) or a function that use item location to know 
    todo: when wining the change the background accent 
    todo: when wining the svg change to the black v 

todo: cpu

*/

function App() {
    const [pageState, setPageState] = useState(2);

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
                <Header
                    pageState={pageState}
                    isRestart={isRestart}
                    playWite={playWite}
                />
                <PickXO
                    pageState={pageState}
                    playerIS={playerIS}
                    playWite={playWite}
                />
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
