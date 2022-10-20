import React from "react"
import headerIcon from "../assets/headerIcon.png"

export default function Header() {
    return (
        <nav>
            <img src={headerIcon} className="header-logo"></img>
            <h1 className="header-title">my travel journal.</h1>
        </nav>
    )
}