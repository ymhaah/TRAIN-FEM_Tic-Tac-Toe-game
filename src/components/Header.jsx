import React from "react";
import Button from "./uiComponents/Button";
import XIcon from "./uiComponents/XIcon.jsx";
import OIcon from "./uiComponents/OIcon.jsx";

function Header(prop) {
    return (
        <header className="main-header">
            <div className="header__Logo">
                <a href="./index.html" className="focus">
                    <svg
                        width="72"
                        height="32"
                        viewBox="0 0 72 32"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <title>XO website logo</title>
                        <g fill="none" fillRule="evenodd">
                            <path
                                d="M8.562 1.634 16 9.073l7.438-7.439a3 3 0 0 1 4.243 0l2.685 2.685a3 3 0 0 1 0 4.243L22.927 16l7.439 7.438a3 3 0 0 1 0 4.243l-2.685 2.685a3 3 0 0 1-4.243 0L16 22.927l-7.438 7.439a3 3 0 0 1-4.243 0L1.634 27.68a3 3 0 0 1 0-4.243L9.073 16 1.634 8.562a3 3 0 0 1 0-4.243L4.32 1.634a3 3 0 0 1 4.243 0Z"
                                fill="#31C3BD"
                            />
                            <path
                                d="M56.1 0c8.765 0 15.87 7.106 15.87 15.87 0 8.766-7.105 15.871-15.87 15.871-8.765 0-15.87-7.105-15.87-15.87C40.23 7.106 47.334 0 56.1 0Zm0 9.405a6.466 6.466 0 1 0 0 12.931 6.466 6.466 0 0 0 0-12.931Z"
                                fill="#F2B137"
                                fillRule="nonzero"
                            />
                        </g>
                    </svg>
                    <span className="visually-hidden"> my logo </span>
                </a>
            </div>
            {prop.pageState == 2 && (
                <>
                    <div className="header__turn">
                        {prop.playWite == false ? (
                            <>
                                <XIcon hover={false} accent="s" />
                                <h2 className="p fw-b">
                                    <span className="visually-hidden">x</span>
                                    turn
                                </h2>
                            </>
                        ) : (
                            <>
                                <OIcon hover={false} accent="s" />
                                <h2 className="p fw-b">
                                    <span className="visually-hidden">o</span>
                                    turn
                                </h2>
                            </>
                        )}
                    </div>
                    <Button
                        pageState="2"
                        accent="s"
                        handelClick={function () {
                            prop.isRestart();
                        }}
                    />
                </>
            )}
        </header>
    );
}

export default Header;
