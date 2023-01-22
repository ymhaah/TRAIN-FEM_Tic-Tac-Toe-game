import { useState } from "react";
import "./index.css";
import Button from "./components/Button.jsx";
console.log(`Made with Love by Youssef Hafnawi`);

function App() {
    const [pageState, setPageState] = useState(3);

    return (
        <div className="App">
            <Button accent="o-accent" pageState={pageState} />
            <Button accent="x-accent" pageState={pageState} />
            <Button accent="s-accent" pageState={pageState} />
        </div>
    );
}

export default App;
