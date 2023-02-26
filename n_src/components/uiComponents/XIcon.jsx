import React from "react";
import accentFun from "../../utils/accentFun";

function XIcon(prop) {
    let stroke;
    prop.hover ? (stroke = 2) : (stroke = 0);

    return (
        <svg
            width={64 + stroke}
            height={64 + stroke}
            viewBox={`0 0 ${64 + stroke} ${64 + stroke}`}
            xmlns="http://www.w3.org/2000/svg"
            className={`${accentFun(prop.accent)} X-icon `}
        >
            <title>X icon</title>
            <path
                d={
                    prop.hover
                        ? "M51.12 1.269c.511 0 1.023.195 1.414.586l9.611 9.611c.391.391.586.903.586 1.415s-.195 1.023-.586 1.414L44.441 32l17.704 17.705c.391.39.586.902.586 1.414 0 .512-.195 1.024-.586 1.415l-9.611 9.611c-.391.391-.903.586-1.415.586a1.994 1.994 0 0 1-1.414-.586L32 44.441 14.295 62.145c-.39.391-.902.586-1.414.586a1.994 1.994 0 0 1-1.415-.586l-9.611-9.611a1.994 1.994 0 0 1-.586-1.415c0-.512.195-1.023.586-1.414L19.559 32 1.855 14.295a1.994 1.994 0 0 1-.586-1.414c0-.512.195-1.024.586-1.415l9.611-9.611c.391-.391.903-.586 1.415-.586s1.023.195 1.414.586L32 19.559 49.705 1.855c.39-.391.902-.586 1.414-.586Z"
                        : "M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z"
                }
                fill={prop.hover ? "none" : "var(--accent-clr)"}
                stroke={prop.hover ? "var(--accent-clr)" : "none"}
                strokeWidth={stroke}
                fillRule={
                    (!prop.hover && prop.accent == "x") || prop.accent == "o"
                        ? "evenodd"
                        : "nonzero"
                }
            />
        </svg>
    );
}

export default XIcon;
