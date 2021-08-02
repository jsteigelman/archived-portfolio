import React from "react";
import "./Nav.css";

export class Nav extends React.Component {
    render() {
        return (
            <div className="nav-container">
                <div>Joey Steigelman</div>
                <button className="nav-button"><a href="mailto:joeysteigelman@gmail.com?subject=Hello">Contact</a></button>
            </div>
        )
    }
}