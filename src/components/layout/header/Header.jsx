import React from "react"
import styles from "./Header.module.scss"
import mainLogo from "/public/img/header/elitis-logo.svg"
import search from "/public/img/header/search.svg"
import mark from "/public/img/header/mark.svg"
import shopBasket from "/public/img/header/shopBasket.svg"
import menu from "/public/img/header/menu.svg"
import BarPage from "./BarPage.jsx"

export default function Header() {
    

    return(
        <header className={styles.header}>
            <BarPage />
            <section>
                <nav className={styles.navi}>
                    <div className={styles.leftBar}>
                        <ul>
                            <li>
                                <button id="bar" onClick={() => {
                                    document.getElementsByClassName('fullPageBg')[0].classList.toggle('hidden');
                                }}>
                                    <img src={menu} alt="search"/>
                                </button>
                            </li>
                            <li>
                                <button>
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
                        <img src={mainLogo} alt="main logo"/>
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
                                        <img src={mark} alt="mark"/>
                                    </div>
                                </button>
                            </li>
                            <li>
                                <button>
                                    <img src={shopBasket} alt="shop basket"/>
                                </button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </section>
        </header>
    )
}