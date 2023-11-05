import React from "react"
import "./BarPage.scss"
import shopBasket from "/public/img/header/shopBasket.svg" 
import search from "/public/img/header/search.svg"
import cancel from "/public/img/header/cancel.svg"

export default function BarPage() {
  
    return (
        <div className="fullPageBg">
            <ul className="barBtn">
                <li>
                    <img src={cancel} alt="close" onClick={ () => {
                        document.getElementsByClassName('fullPageBg')[0].classList.toggle('hidden');
                    }}/>
                    <img src={search} alt="search"/>
                </li>
                <li></li>
                <li>
                    <img src={shopBasket} alt="shop basket"/>
                </li>
            </ul>
            <div className="barLinks">
                <div className="menUpDown">
                    <ul>
                        <li>
                            <a><p>Collection</p></a>
                        </li>
                        <li>
                            <a><p>Online shop</p></a>
                        </li>
                        <li>
                            <a><p>Projects</p></a>
                        </li>
                        <li>
                            <a><p>Expertise</p></a>
                        </li>
                        <li>
                            <a><p>Where to buy</p></a>
                        </li>
                        <li>
                            <a><p>Custom contract</p></a>
                        </li>
                    </ul>
                    <ul>
                        <li>Photo library</li>
                        <li>Professional access (Extranet)</li>
                        <li>My Moodboard</li>
                        <li>Brochures</li>
                        <li>Press Room</li>
                        <li>Contact</li>
                        <li>My Account</li>
                    </ul>
                </div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}
