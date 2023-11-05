import React from "react"
import "./SubNews.scss"
import { handleFormSubmit } from "./SubFunc.js";
import {facebook, insta, linked, pinterest, youtube } from "/src/components/layout/footer/sectionSubNew/svgBtn.js";
function SubNews() {
   
    return(
        <div className="subPart">
            <div className="leftSubPart">
                <div></div>
                <div>ведутся строительные работы</div>
                <div></div> 
            </div>
            <div className="rightSubPart">
                <div className="subRows">
                    <h3>Subscribe to our newsletter</h3>
                    <form className={"inputLine"} action="" method="get" id="newsForm" onSubmit={handleFormSubmit}>
                        <input type="text" id="fname" name="fname" placeholder="First name" required />
                        <input type="email" id="email" name="email" placeholder="Email address" required />
                        <fieldset>
                            <label className={"checkBox"}>
                                <input type="checkbox" name="privacy btn" /> 
                                <p>
                                    By checking this box, you agree to our privacy policy.
                                    <a>Finde out more</a>
                                </p>
                            </label>
                        </fieldset>
                        <button type="submit">Registration</button>
                    </form>
                    <div className="socialLinks">
                        <a>
                            <img alt="social links" src={facebook}/>
                        </a>
                        <a>
                            <img alt="social links" src={insta}/>
                        </a>
                        <a>
                            <img alt="social links" src={linked}/>
                        </a>
                        <a>
                            <img alt="social links" src={pinterest}/>
                        </a>
                        <a>
                            <img alt="social links" src={youtube}/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubNews;