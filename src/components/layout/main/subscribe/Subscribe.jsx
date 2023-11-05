import React from "react" 
import "/src/components/layout/main/subscribe/Subscribe.scss"
import {hoverList} from "/src/components/layout/main/sectionSix/DataSix.js"

export default function Subscribe() {
    return(
        <div className="razmer">
                {hoverList.map( obj => 
                    <div>
                        <img src={obj.src1} className="kartSize"/>
                    </div>
                )}
        </div>
    )
}