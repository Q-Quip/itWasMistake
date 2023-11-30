import React from "react"
import { useState } from "react"
import styles from "./Header.module.scss"
import mainLogo from "/public/img/header/elitis-logo.svg"
import search from "/public/img/header/search.svg"
import mark from "/public/img/header/mark.svg"
import shopBasket from "/public/img/header/shopBasket.svg"
import menu from "/public/img/header/menu.svg"
import BarPage from "./BarPage/BarPage.jsx"
import ShopBar from "./ShopBar/ShopBar.jsx"
import Mark from "./Login/Login.jsx"
import {Link} from "react-router-dom"

export default function Header() {
    const [toggle, setToggle] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const changeActive = () => {
        setIsActive(!isActive);
    }

    return(
        <header className={styles.header}>
            <BarPage />
            <section>
                <nav className={styles.navi}>
                    <div className={styles.leftBar}>
                        <ul>
                            <li>
                                <button style={{zIndex: '20'}} className={toggle?`${styles.hamburger} ${styles.isActive}`: `${styles.hamburger}`} onClick={()=> { 
                                    setToggle(!toggle);
                                    document.getElementsByClassName('fullPageBg')[0].classList.toggle('hidden');}} >
                                    <div className={styles.bar}></div>
                                </button>
                            </li>
                            <li>
                                <button style={{zIndex: '20'}}>
                                    <img src={search} alt="search"/>
                                </button>
                            </li>
                            <li>
                                <button>
                                    <p>Our Collections</p>
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.centBar}>
                        <Link to="/">
                            <img src={mainLogo} alt="main logo"/>
                        </Link>
                    </div>
                    <div className={styles.rightBar}>
                        <ul>
                            <li>
                                <button>
                                    <p>Online shop</p>
                                </button>
                            </li>
                            <li>

                                <button>
                                    <div className={styles.hovText}>
                                        <Link to="/login">
                                            <img src={mark} alt="mark"/>
                                        </Link>
                                    </div>
                                </button>
                            </li>
                            <li>
                                <button style={{zIndex: '22'}}  onClick={() => {
                                    changeActive();
                                }}>
                                    <img src={shopBasket} alt="shop basket"/>
                                </button>
                            </li>
                        </ul>
                    </div>
                    <ShopBar active={isActive} toggle={changeActive}/>
                </nav>
            </section>
        </header>
    )
}