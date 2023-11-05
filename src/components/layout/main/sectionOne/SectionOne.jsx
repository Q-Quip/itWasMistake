import React from "react";
import styles from "./SectionOne.module.scss"
import mainOne from "/public/img/main/SectionOne/mainOne.mp4"

export default function SectionOne() {
    return (
        <section className={styles.section}>
            <video src={mainOne} autoPlay muted loop  className={styles.video} >
                Sorry, your browser doesn't support embedded videos.
            </video>
            <div>
                <span className={styles.mainPhrase}>  L'escapade  </span>
            </div>
        </section>
    )
}