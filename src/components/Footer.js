import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { VscMention } from "react-icons/vsc";

const Foonter = ()=>{
    let showdate = new Date();
    let displaydate = showdate.getFullYear();
    return( 
        <div className="footerFather">
        
            <div className="FooterwrapperFather"></div>
            
    
            <div className="footer">
                <div className="iconFather">
                    <a href="https://www.facebook.com/" target="blank">< FaFacebookF /></a>
                    <a  href="https://github.com/anabbaa?tab=repositories" target="blank">< FaGithub/></a>
                    <a href="https://twitter.com/?lang=en" target="blank" >< FaTwitter /></a>
                    <a className="icon"  href="mailto:ahmed.nabaa.an@gmail.com" target="_blank">< VscMention /></a>
                </div>
                <div className="made" >Made by Ahmed Nabbaa</div>
                <div className="copy" >&copy; All Copy Right Reserved <span>{displaydate}</span></div>
                </div>
                </div>
    
    )

}
export default Foonter