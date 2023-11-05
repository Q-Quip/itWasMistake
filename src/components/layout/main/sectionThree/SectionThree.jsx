import React from "react"
import styles from "./SectionThree.module.scss"
import SliderImg from "/src/components/ui/main/slider/SliderImg.jsx"
import TextSlider from "/src/components/ui/main/slider/TextSlider.jsx"

import Arrow from "/src/components/ui/main/slider/Arrow.jsx"
import leftArw from "/public/img/main/sectionThree/arrowLeft.svg"

import {slideImg, slideText, lilSlideImg} from "./DataThree.js"


export default function SectionThree() {
    return (
        <div className={styles.imgSlider}>

            {slideImg.map( obj => 
                <SliderImg src={obj.src} title={obj.title} key={obj.id}/>
            )}

            <TextSlider text={slideText[0].text} title={slideText[0].title} btn={"discover"}   img={lilSlideImg[0].lilSrc} alt={lilSlideImg[0].lilTitle}/>


            {/* <Arrow arwImg={leftArw}  leftSide={"arwL"}/>  - тут нужно бы сделать стрелки - но у меня какая то хуйня с классами*/} 
        </div>
    )
}