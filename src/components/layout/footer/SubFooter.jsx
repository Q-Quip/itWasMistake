import React from "react"
import "./SubFooter.scss"
import SubNews from "./sectionSubNew/SubNews.jsx";
import Footer from "./sectionLinks/Footer.jsx"

function SubFooter() {
    return(
        <footer>
            <section className="subNews">
                <SubNews />
            </section>
            <section >
                <Footer />
            </section>
        </footer>
    )
}

export default SubFooter;