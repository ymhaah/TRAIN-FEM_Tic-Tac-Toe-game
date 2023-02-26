import React from "react";
import Button from "./uiComponents/Button.jsx";

function Result(prop) {
    return (
        <div id="result-and-restart">
            {prop.restart ? (
                <div>
                    restart
                    <Button
                        accent="o"
                        pageState={3}
                        restart={true}
                        handelClick={() => {
                            prop.updatePageState(1);
                        }}
                    />
                    <Button
                        accent="s"
                        pageState={3}
                        restart={true}
                        handelClick={() => {
                            prop.updatePageState(2);
                        }}
                    />
                </div>
            ) : prop.draw ? (
                <div>
                    draw
                    <Button
                        accent="o"
                        pageState={3}
                        handelClick={() => {
                            prop.updatePageState(2);
                        }}
                    />
                    <Button
                        accent="s"
                        pageState={3}
                        handelClick={() => {
                            prop.updatePageState(1);
                        }}
                    />
                </div>
            ) : prop.winner === true ? (
                <div>
                    o
                    <Button
                        accent="o"
                        pageState={3}
                        handelClick={() => {
                            prop.updatePageState(2);
                        }}
                    />
                    <Button
                        accent="s"
                        pageState={3}
                        handelClick={() => {
                            prop.updatePageState(1);
                        }}
                    />
                </div>
            ) : prop.winner === false ? (
                <div>
                    x
                    <Button
                        accent="o"
                        pageState={3}
                        handelClick={() => {
                            prop.updatePageState(2);
                        }}
                    />
                    <Button
                        accent="s"
                        pageState={3}
                        handelClick={() => {
                            prop.updatePageState(1);
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
