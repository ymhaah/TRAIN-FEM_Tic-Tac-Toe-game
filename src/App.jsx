import { useState } from "react";
import "./index.css";
import Button from "./components/Button.jsx";
console.log(`Made with Love by Youssef Hafnawi`);

function App() {
    const [pageState, setPageState] = useState(3);
    const [restart, setRestart] = useState(true);



    return (
        <div className="App">
            <Button accent="o-accent" pageState={pageState} restart={restart}/>
            <Button accent="x-accent" pageState={pageState} restart={restart}/>
            <Button accent="s-accent" pageState={pageState} restart={restart}/>
        </div>
    );
}

export default App;
