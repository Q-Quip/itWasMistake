import React from "react"
import styles from "./Main.module.scss"

import PgModule from "./pg-module/PgModule.jsx"

import SectionOne from "./sectionOne/SectionOne.jsx"
import SectionTwo from "./sectionTwo/SectionTwo.jsx"
import SectionThree from "./sectionThree/SectionThree.jsx"
import SectionFour from "./sectionFour/SectionFour.jsx"
import SectionFive from "./sectionFive/SectionFive.jsx"
import SectionSix from "./sectionSix/SectionSix.jsx"
import Subscribe from "./subscribe/Subscribe.jsx"

import SubNews from "../footer/sectionSubNew/SubNews.jsx"

export default function Main() {
    return (
        <>
            <main >
                <SectionOne />
                <SectionTwo />
                
                <PgModule sectionColor={"#e5b672"}>
                    <SectionThree />
                </PgModule>
                <PgModule sectionColor={"#fff"}>
                    <SectionFour />
                </PgModule>
                <PgModule sectionColor={"rgb(196, 158, 137)"}>
                    <SectionFive />
                </PgModule>
                <PgModule sectionColor={"#fff"}>
                    <SectionSix />
                </PgModule>
            </main>
        </>
    )
}