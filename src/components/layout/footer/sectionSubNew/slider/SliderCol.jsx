import React, { useEffect, useRef, useState } from "react";
import styles from "./SliderCol.module.scss"

export function SliderCol({imgUrls, slideWay="slideUp"}) {
    return(
        <div className={styles.container}>
            <div className={styles.logosSlider}>
                <div className={`${styles[slideWay]}`}> 
                    {imgUrls.map( (card, i) => 
                        <img src={card} title="img card" key={i}  className={styles.base} />
                    )}
                </div>
                <div className={`${styles[slideWay]}`}> 
                    {imgUrls.map( (card, i) => 
                        <img src={card} title="img card" key={i}  className={styles.base} />
                    )}
                </div>
            </div>
        </div> 
    )
}