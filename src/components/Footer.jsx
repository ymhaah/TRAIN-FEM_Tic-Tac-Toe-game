import React from "react";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import Button from "./uiComponents/Button";
import GameResult from "./uiComponents/GameResult";

gsap.registerPlugin(Flip);

let duration = 0.5;
let delay = 0.1;
let timeToStage2 = (duration + delay + 0.1) * 1000;

function g_toStage2() {
    gsap.to("footer :first-child", {
        duration: duration,
        delay: delay,
        x: "100%",
        opacity: 0,
    });
    gsap.to("footer :last-child", {
        duration: duration,
        delay: delay,
        x: "-100%",
        opacity: 0,
    });
    let logo = document.querySelector(".header__Logo");
    let g_logo = Flip.getState(logo);

    Flip.to(g_logo, {
        duration: duration,
        delay: delay,
        scale: 3,
        absolute: true,
        scale: true,
    });
}

function Footer(prop) {
    return (
        <footer>
            {prop.pageState == 1 && (
                <>
                    <Button
                        pageState="1"
                        accent="o"
                        handelClick={function () {
                            prop.playWithCpu(false);
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
                            prop.playWithCpu(true);
                            g_toStage2();
                            setTimeout(() => {
                                prop.updatePageState(2);
                            }, timeToStage2);
                        }}
                    />
                </>
            )}

            {prop.pageState == 2 && <GameResult />}
        </footer>
    );
}

export default Footer;
