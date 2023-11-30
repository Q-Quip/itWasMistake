import React from "react" 
import styles from "/src/components/layout/main/sectionFour/SectionFour.module.scss"

export default function DragImg({img,i}) {
    return(
        <div className={styles.containCards}>
            <img className={styles.cardsOne} src={img} key={i*2} />
        </div>
    )
}