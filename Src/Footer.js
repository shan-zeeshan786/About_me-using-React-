import React from "react";
import face from "./images/fac.png";
import git from "./images/GitHub-Mark.png";
import twit from "./images/twit.png";
import insta from "./images/images.png";

function Footer(){
    return(
        <div className="Footer--div">
       <a href="https://instagram.com/_shan__alam?utm_medium=copy_link" >
        <img src={insta} alt="logo"  width="20px" />         
        </a>
        <a href="https://www.facebook.com/shanzeeshanalam" className="log">
        <img src={face}  alt="logo2"  width="20px" className="log" />         
        </a>
        <a href="https://twitter.com/MDZeesh17688493" className="log">
        <img src={twit}  alt="logo3"  width="20px" className="log" />         
        </a>
        <a href="https://github.com/shan-zeeshan786" className="log">
        <img src={git}   alt="logo4"  width="20px" className="log" />         
        </a>
        </div>
    )
}
export default Footer