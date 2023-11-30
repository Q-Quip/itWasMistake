import React from "react"
import styles from "./SectionFour.module.scss"
import IMG from "./SectionFourImg.js"
import DragImg from "/src/components/ui/main/sectionfour/DragImg.jsx"

import TextButton from "/src/components/ui/main/slider/TextButton.jsx"

export default function SectionFour() {

    return (
            <div className="mouseMove">
                <div className={styles.obolochka}>
                    <div className={styles.zagolovok}>
                        <p>elitis project</p>
                        <p>Imagine the poetry of the world</p>
                    </div>
                </div>

                <div> 
                    {IMG.map( (path, index) => (
                         <DragImg img={path} key={index}/>
                    ))}
                </div>

                <div className={styles.discoverPosition}>
                    <TextButton text={"Discover the creations of designers and interior architects we work hand in hand with and find inspiration in the Élitis projects."} btn={"explore"} />                 
                </div>
                
                
                
            </div>
    )
}