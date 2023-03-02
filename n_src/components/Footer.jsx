import React from "react";
import { gsap } from "gsap";
import Button from "./uiComponents/Button";

let duration = 0.5;
let delay = 0.1;
let timeToStage2 = (duration + delay + 0.1) * 1000;

function g_toStage2() {
    gsap.to("main, footer :first-child", {
        duration: duration,
        delay: delay,
        x: "100%",
        opacity: 0,
    });
    gsap.to(".pickXO, footer :last-child", {
        duration: duration,
        delay: delay,
        x: "-100%",
        opacity: 0,
    });
}

function Footer(prop) {
    return (
        <footer>
            <Button
                pageState="1"
                accent="o"
                handelClick={function () {
                    g_toStage2();
                    setTimeout(() => {
                        prop.updatePageState(2);
                    }, timeToStage2);
                }}
            />
            <Button
                pageState="1"
                accent="x"
                handelClick={function () {
                    prop.playWithCpu();
                    g_toStage2();
                    setTimeout(() => {
                        prop.updatePageState(2);
                    }, timeToStage2);
                }}
            />
        </footer>
    );
}

export default Footer;
