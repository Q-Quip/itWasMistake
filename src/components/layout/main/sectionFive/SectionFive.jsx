import React from "react"

import styles from "/src/components/layout/main/sectionThree/SectionThree.module.scss"

import {textSlide, imgSlide, lilSlideImg} from "./DataFive.js"
import SliderImg from "/src/components/ui/main/slider/SliderImg.jsx"
import TextSlider from "/src/components/ui/main/slider/TextSlider.jsx"

export default function SectionFive() {
    return (
        <div className={styles.imgSlider} >
            <TextSlider text={textSlide[0].text} title={textSlide[0].title} btn={"discover"} img={lilSlideImg[0].lilSrc} alt={lilSlideImg[0].lilTitle} />
            <SliderImg src={imgSlide[0].src} title={imgSlide[0].title} key={imgSlide[0].id}/>
        </div>
    )
}