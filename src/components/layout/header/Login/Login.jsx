import React, {useState, useRef} from "react";
import styles from "./Login.module.scss"
import {handleSubmit} from "./login.js"

export default function Login() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    
    return (
        <section className={styles.page}> 
            <div className={styles.block}>
                <div className={styles.logo}><h1>Log in</h1></div>
                <form className={styles.inputs} onSubmit={handleSubmit}>
                    <input type="email" 
                        ref={emailRef}  
                        placeholder="Email address" 
                        required autoFocus />

                    <input type="password" 
                        ref={passwordRef} 
                        placeholder="Password" 
                        required autoFocus />

                    <button className={styles.logBut} type="submit"> <p>log in</p></button>
                </form>
                <div className={styles.problems}>
                    <button>
                        <a>
                            <p>New? Create an account</p>
                        </a>
                    </button>
                    <button>
                        <a>
                            <p>Forgot your password?</p>
                        </a>
                    </button>
                </div>
            </div>
        </section>
    )
}