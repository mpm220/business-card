import { Card } from 'react-bootstrap';
import React from "react";
import pic from "../images/largs.jpg";
import SocialBar from './SocialBar';
import twitter from "../images/twitter.png";
import lin from "../images/lin.png";
import insta from "../images/insta.png";
import ghub from "../images/ghub.png";
import EmailButton from './EmailButton';
import InfoHeaders from './InfoHeaders';
import PersonalInfo from './PersonalInfo';


export default function BusinessCard(){
    return (
        <div className="card-holder">
            <div className="my-card" style={{width: "20rem"}}>
                <img className="card-img-top" src={pic} style= {{width:"317px", height:"317px"}} alt="bob"></img>
                <InfoHeaders />
                <EmailButton />
                <PersonalInfo title={"About"} info={"Largs (Scottish Gaelic: An Leargaidh Ghallda) is a town on the Firth of Clyde in North Ayrshire, Scotland, about 33 miles (53 km) from Glasgow. The original name means 'the slopes' (An Leargaidh) in Scottish Gaelic." }/>
                <PersonalInfo title={"Interests"} info={"Some quick example text to build on the card title and make up the bulk of the card's content."} />
                <SocialBar />
            </div>
        </div>
        
    )
}

