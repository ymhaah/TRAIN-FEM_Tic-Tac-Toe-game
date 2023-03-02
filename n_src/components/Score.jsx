import React from "react";

function Score(prop) {
    return (
        <footer>
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
        </footer>
    );
}

export default Score;
