import React from "react";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import Button from "./uiComponents/Button";

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
    // let logo = document.querySelector(".header__Logo");
    // let g_logo = Flip.getState(logo);

    // Flip.to(g_logo, {
    //     duration: duration,
    //     delay: delay,
    //     scale: 3,
    //     absolute: true,
    //     scale: true,
    // });
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
                </>
            )}

            {prop.pageState == 2 && (
                <>
                    <div className="accent-X-clr">
                        <h3 className="p">
                            X (
                            {prop.players.cpu.playingWith &&
                            prop.players.cpu.cpuPlayer === false
                                ? "cpu"
                                : prop.players.cpu.playingWith &&
                                  prop.players.cpu.cpuPlayer === true
                                ? "you"
                                : !prop.players.cpu.playingWith && "player1"}
                            )
                        </h3>
                        <p className="fw-b fs-400">{prop.history.xWins}</p>
                    </div>
                    <div className="accent-S-clr">
                        <h3 className="p">ties</h3>
                        <p className="fw-b fs-400">{prop.history.draw}</p>
                    </div>
                    <div className="accent-O-clr">
                        <h3 className="p">
                            O (
                            {prop.players.cpu.playingWith &&
                            prop.players.cpu.cpuPlayer === true
                                ? "cpu"
                                : prop.players.cpu.playingWith &&
                                  prop.players.cpu.cpuPlayer === false
                                ? "you"
                                : !prop.players.cpu.playingWith && "player2"}
                            )
                        </h3>
                        <p className="fw-b fs-400">{prop.history.oWins}</p>
                    </div>
                </>
            )}
        </footer>
    );
}

export default Footer;
