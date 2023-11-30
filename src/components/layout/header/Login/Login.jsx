import React, {useState} from "react";
import styles from "./Login.module.scss"

export default function Login() {
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const changePassword = (e) => {
        setPassword(e.target.value);
    }
    const changeMail = (e) => {
        setMail(e.target.value);
    }
    return (
        <section className={styles.page}> 
            <div className={styles.block}>
                <div className={styles.logo}><h1>Log in</h1></div>
                <form className={styles.inputs}>
                    <input type="email" name={mail}  placeholder="Email address" onChange={(e) => {changeMail(e)}} required autoFocus />
                    <input type="password" name={password}  placeholder="Password" onChange={(e) => {changePassword(e)}} required autoFocus />
                    <button className={styles.logBut}> <p>log in</p></button>
                </form>
                <div className={styles.problems}>
                    <button>
                        <a>
                            <p>New? Create an account</p>
                        </a>
                    </button>
                    <button type="submit">
                        <a>
                            <p>Forgot your password?</p>
                        </a>
                    </button>
                </div>
            </div>
        </section>
    )
}