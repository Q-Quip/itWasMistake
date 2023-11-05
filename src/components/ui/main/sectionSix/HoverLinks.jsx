import React from "react" 
import "/src/components/layout/main/sectionSix/SectionSix.scss"

export default function HoverList(props) {
    return(
        <a className="distance">
            <div className="back">
                <img className="imgSize" src={props.src1} alt={props.alt1}/>
                <img className="bgSize" src={props.src2} alt={props.alt1}/>
            </div>
            <div>
                <p className="underPhoto">
                    {props.title}
                </p>
            </div>
        </a>
    )
}