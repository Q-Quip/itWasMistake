import React from "react"
import styles from "/src/components/layout/main/sectionThree/SectionThree.module.scss"
import TextButton from "/src/components/ui/main/slider/TextButton.jsx"

export default function TextSlider(props) {
    return (
        <div className={styles.razdel}> 
            <div className={styles.zone}> 
                <img src={props.img} alt={props.alt}  /> 
            </div>
            <div className={styles.textSize}> 
                <div>
                    <div>
                        <h2>{props.title}</h2>
                    </div>
                    <TextButton text={props.text} btn={props.btn} />
                </div>
            </div>
        </div>
    )
}