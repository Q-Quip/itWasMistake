import React from "react";
import styles from './ShopBar.module.scss'
import { useState } from "react";

export default function ShopBar({active, toggle}) {
    return(
        <>
            <div className={active?`${styles.ontheTop} ${styles.active}`: `${styles.ontheTop}`}>
                <div className={active?`${styles.BG}`: ` `} onClick={toggle}> </div>
                <div className={active?`${styles.main} ${styles.active}`: `${styles.main}`} >
                    <div className={styles.head}><h1>your cart</h1></div>
                    <div className={styles.body}><h2>Your cart is empty</h2></div>        
                </div>
            </div>
        </>
    ) 
}