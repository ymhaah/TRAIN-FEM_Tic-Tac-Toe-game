import React from "react";

function Button(prop) {
    return (
        <button
            type="button"
            className={`Button focus ${
                prop.accent == "x-accent"
                    ? "accent-X-clr"
                    : prop.accent == "o-accent"
                    ? "accent-O-clr"
                    : prop.accent == "s-accent" && "accent-S-clr"
            } `}
        >
            test1
        </button>
    );
}
export default Button;
