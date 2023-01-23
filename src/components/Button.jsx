import React from "react";

function Button(prop) {
    let accent =
        prop.accent == "x-accent"
            ? "accent-X-clr"
            : prop.accent == "o-accent"
            ? "accent-O-clr"
            : prop.accent == "s-accent" && "accent-S-clr";
    let content = "";
    if (prop.pageState == 1) {
        content =
            prop.accent == "x-accent"
                ? "new game (vs cpu)"
                : prop.accent == "o-accent"
                ? "new game (vs player)"
                : prop.accent == "s-accent" && "";
    } else if (prop.pageState == 2) {
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
                prop.accent == "x-accent"
                    ? ""
                    : prop.accent == "o-accent"
                    ? "yes, restart"
                    : prop.accent == "s-accent" && "no, cancel";
        } else if (!prop.restart) {
            content =
                prop.accent == "x-accent"
                    ? ""
                    : prop.accent == "o-accent"
                    ? "next round"
                    : prop.accent == "s-accent" && "quit";
        }
    }

    return (
        <button type="button" className={`Button focus ${accent}`}>
            {content}
        </button>
    );
}
export default Button;
