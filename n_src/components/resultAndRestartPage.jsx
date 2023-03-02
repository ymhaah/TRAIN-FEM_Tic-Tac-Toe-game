import React from "react";
import Button from "./uiComponents/Button.jsx";
import OIcon from "./uiComponents/OIcon.jsx";
import XIcon from "./uiComponents/XIcon.jsx";

function Result(prop) {
    return (
        <div id="result-and-restart">
            {prop.restart ? (
                <div className="result">
                    <h3>restart game?</h3>
                    <Button
                        accent="s"
                        pageState={3}
                        restart={true}
                        handelClick={() => {
                            prop.updatePageState(2);
                        }}
                    />
                    <Button
                        accent="o"
                        pageState={3}
                        restart={true}
                        handelClick={() => {
                            prop.updatePageState(1);
                            prop.quit();
                        }}
                    />
                </div>
            ) : prop.draw ? (
                <div className="result">
                    <h3>round tied</h3>
                    <Button
                        accent="s"
                        pageState={3}
                        handelClick={() => {
                            prop.updatePageState(1);
                            prop.quit();
                        }}
                    />
                    <Button
                        accent="o"
                        pageState={3}
                        handelClick={() => {
                            prop.updatePageState(2);
                            prop.nextRound();
                        }}
                    />
                </div>
            ) : prop.winner === true ? (
                <div className="result accent-O-clr">
                    {prop.players.p1 === prop.winner ? (
                        <h3>you won!</h3>
                    ) : (
                        <h3>oh no, you lost...</h3>
                    )}

                    <div className="e">
                        <span>
                            <OIcon hover={false} accent={"o"} />
                        </span>
                        <p>takes the round</p>
                    </div>

                    <Button
                        accent="s"
                        pageState={3}
                        handelClick={() => {
                            prop.updatePageState(1);
                            prop.quit();
                        }}
                    />
                    <Button
                        accent="o"
                        pageState={3}
                        handelClick={() => {
                            prop.updatePageState(2);
                            prop.nextRound();
                        }}
                    />
                </div>
            ) : prop.winner === false ? (
                <div className="result accent-X-clr">
                    {prop.players.p1 === prop.winner ? (
                        <h3>you won!</h3>
                    ) : (
                        <h3>oh no, you lost...</h3>
                    )}
                    <div className="e">
                        <span>
                            <XIcon hover={false} accent={"x"} />
                        </span>
                        <p>takes the round</p>
                    </div>

                    <Button
                        accent="s"
                        pageState={3}
                        handelClick={() => {
                            prop.updatePageState(1);
                            prop.quit();
                        }}
                    />
                    <Button
                        accent="o"
                        pageState={3}
                        handelClick={() => {
                            prop.updatePageState(2);
                            prop.nextRound();
                        }}
                    />
                </div>
            ) : (
                console.error("WTF, how did you get here")
            )}
        </div>
    );
}

export default Result;
