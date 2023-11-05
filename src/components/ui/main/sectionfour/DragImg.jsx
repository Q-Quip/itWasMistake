import React from "react" 
import styles from "/src/components/layout/main/sectionFour/SectionFour.module.scss"

export default function DragImg(props) {
    return(
        <div className={styles.containCards}>
            <img className={styles.cardsOne} src={props.img} />
        </div>
    )
}