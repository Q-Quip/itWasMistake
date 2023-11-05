import React from "react"
import styles from "/src/components/layout/main/sectionThree/SectionThree.module.scss"

export default function SliderImg(props) {
    return (
        <div className={styles.imgSize}> 
            <img src={props.src} alt={props.title} />
        </div>
    )
}