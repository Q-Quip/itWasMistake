import React from "react"
import styles from "./Pg.module.scss"

export default function PgModule({children,sectionColor}) {
    return (
        <section className={styles.section} style={{background: sectionColor }}>
            {children}
        </section>
    )
}