import { useState } from "react";
import "./index.css";
import NewGamePage from "./pages/NewGamePage.jsx";
import PlayingPage from "./pages/playingPage";
import Button from "./components/uiComponents/Button";
// import Result from "./components/uiComponents/Result.jsx";
console.log(`Made with Love by Youssef Hafnawi`);

function App() {
    const [pageState, setPageState] = useState(1);
    const [cpu, setCpu] = useState(false);
    const [playWite, setPlayWite] = useState(true); // ! true =  O , false = X
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
    console.log(pageState);
    return (
        <div className="App">
            <NewGamePage
                playWithCpu={playWithCpu}
                playerIS={playerIS}
                pageState={updatePageState}
            />
            {/* <PlayingPage cpu={cpu} /> */}
        </div>
    );
}

export default App;
