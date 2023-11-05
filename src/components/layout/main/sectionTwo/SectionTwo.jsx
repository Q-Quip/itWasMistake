import React from "react";
import styles from "./SectionTwo.module.scss"
import background from "/public/img/main/sectionTwo/bg.jpeg"

export default function SectionTwo() {
    return (
        <section className={styles.sectionTwo} style={{backgroundImage: `url(${background})`}} >
            <div>
                <p>wallcovering - fabric - accessories</p>
                <p>Inviting new materials to the world. Reshaping our ideas of linen, quartz or even precious wood. Giving ancient gestures a new language. Reinterpreting an art against all odds... Our philosophy is that of innovation and metamorphosis.</p>
            </div>
        </section>
    )
}