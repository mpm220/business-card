import React from "react";
import { Card } from 'react-bootstrap';

export default function PersonalInfo(props){
    const title = props.title;
    const info = props.info;
    return(
        <>
            <Card.Subtitle className="body-headings">{title}</Card.Subtitle>
            <div className="card-body">
                <p className="about-me">{info}</p>
            </div>
        </>
    )
}