import React from "react"

import  "./SectionSix.scss"
import {hoverList} from "./DataSix.js"
import HoverLinks from "/src/components/ui/main/sectionSix/HoverLinks.jsx"

export default function SectionFive() {
    return (
        <div>
            <div className="title">
                <p>
                    accessories e-shop
                </p>
                <p>
                    Welcome home!
                </p>
            </div>
            <div className="tirList">
                {hoverList.map( obj => 
                    <HoverLinks src1={obj.src1} src2={obj.src2}  alt={obj.alt} title={obj.title} key={obj.id}/>
                )}
            </div>
        </div>
    )
}     