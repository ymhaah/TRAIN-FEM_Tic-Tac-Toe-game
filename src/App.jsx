import { useState } from "react";
import { gsap } from "gsap";
import Button from "./components/Button.jsx";
import "./index.css";

console.log(`Made with Love by Youssef Hafnawi`);

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <Button accent="o-accent" />
            <Button accent="x-accent" />
        </div>
    );
}

export default App;
