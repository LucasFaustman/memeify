import React from "react"
import trollFace from '../images/troll-face.png'


export default function Header() {
    return (
        <header className="header">
            <img 
                src={trollFace}
                alt='troll-face'
                className="header--image"
            />
            <h2 className="header--title">Memeify</h2>
            <h4 className="header--project">Crafted by Lucas Faustman</h4>
        </header>
    )
}