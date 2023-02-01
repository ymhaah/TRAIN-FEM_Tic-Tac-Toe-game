import React from "react";
import Button from "./uiComponents/Button";
import GameResult from "./uiComponents/GameResult";

function Footer(prop) {
    return (
        <footer>
            {prop.pageState == 1 && (
                <>
                    <Button
                        pageState="1"
                        accent="o"
                        handelClick={function () {
                            // prop.updatePageState(2);
                            prop.playWithCpu(false);
                        }}
                    />
                    <Button
                        pageState="1"
                        accent="x"
                        handelClick={function () {
                            // prop.updatePageState(2);
                            prop.playWithCpu(true);
                        }}
                    />
                </>
            )}

            {prop.pageState == 2 && <GameResult />}
        </footer>
    );
}

export default Footer;
