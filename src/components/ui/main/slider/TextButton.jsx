import React from "react"
import styles from "/src/components/layout/main/sectionThree/SectionThree.module.scss"

export default function TextButton(props) {
    return (
        <div className={styles.textButton}>
            <p className={styles.textMarg}>
                {props.text}    
            </p>
            <a> 
                <button className={styles.hov}>
                    <p>{props.btn}</p> 
                </button>
            </a>
        </div>
    )
}