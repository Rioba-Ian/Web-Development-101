import { useState } from "react"
import reactsmallicon from "../images/reactjs-icon.png"

export default function Navbar(props) {
    return (
        <nav
            className={props.darkMode ? "dark" : ""}
        >
            <img
                className="nav--logo_icon"
                src={reactsmallicon}
            />
            <h3 className="nav--logo_text">ReactFacts</h3>

            <div
                className="toggler"
            >
                <p className="toggler--light">Light</p>
                <div
                    className="toggler--slider"
                    onClick={props.handleClick}
                >
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
        </nav>
    )
}