import React from "react"
import headerIcon from "../assets/headerIcon.png"

export default function Header() {
    return (
        <nav>
            <img src={headerIcon}></img>
            <h1>my travel journal</h1>
        </nav>
    )
}