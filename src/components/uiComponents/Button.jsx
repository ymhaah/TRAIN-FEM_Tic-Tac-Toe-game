import React from "react";
import accentFun from "../../utils/accentFun";

function Button(prop) {
    let content = "";
    if (prop.pageState == 1) {
        content =
            prop.accent == "x"
                ? "new game (vs cpu)"
                : prop.accent == "o"
                ? "new game (vs player)"
                : prop.accent == "s" && "";
    } else if (prop.pageState == 2 && prop.accent == "s") {
        content = (
            <>
                <img
                    src="./src/assets/icons/icon-restart.svg"
                    alt="restart icon"
                />
                <span className="visually-hidden">restart button</span>
            </>
        );
    } else if (prop.pageState == 3) {
        if (prop.restart) {
            content =
                prop.accent == "x"
                    ? ""
                    : prop.accent == "o"
                    ? "yes, restart"
                    : prop.accent == "s" && "no, cancel";
        } else {
            content =
                prop.accent == "x"
                    ? ""
                    : prop.accent == "o"
                    ? "next round"
                    : prop.accent == "s" && "quit";
        }
    }

    return (
        <button
            type="button"
            className={`Button focus ${accentFun(prop.accent)}`}
            onClick={prop.handelClick}
        >
            {content}
        </button>
    );
}
export default Button;
