import React from "react"
import "./Footer.scss"
import SubNews from "./sectionSubNew/SubNews.jsx";
import Links from "./sectionLinks/Links.jsx"

function Footer() {
    return(
        <footer>
            <section className="subNews">
                <SubNews />
            </section>
            <section className="subLinks">
                <Links />
            </section>
        </footer>
    )
}

export default Footer;