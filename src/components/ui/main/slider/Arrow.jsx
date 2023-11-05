import React from "react"
import "/src/components/layout/main/sectionThree/SectionThree.module.scss"


export default function Arrow(props) {
    return (
        <div className={props.leftSide}>
            <div className="arwButton">
                <img src={props.arwImg} alt="arrow left/right" />
            </div>
        </div>
    )
}