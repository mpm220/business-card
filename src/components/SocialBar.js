import React from "react";
import twitter from "../images/twitter.png";
import lin from "../images/lin.png";
import insta from "../images/insta.png";
import ghub from "../images/ghub.png";
import { Card } from 'react-bootstrap';


export default function SocialBar(){
    return(
        <Card.Footer>
            <div className="socials-banner">
                <ul className="socials-list">
                    <li><img src={twitter} style={{width:"25px", height:"25px"}} alt="twitter"/></li>
                    <li><img src={lin} style={{width:"25px", height:"25px"}} alt="lin"/></li>
                    <li><img src={insta} style={{width:"25px", height:"25px"}} alt="insta"/></li>
                    <li><img src={ghub} style={{width:"25px", height:"25px"}} alt="ghub"/></li>
                </ul>
            </div>
        </Card.Footer>
    )
}