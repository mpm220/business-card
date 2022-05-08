import React from "react"
import { Card } from 'react-bootstrap';

export default function InfoHeaders(){
    return (
        <div>
            <Card.Title className="fullName"> Nice view</Card.Title>
            <Card.Subtitle className="profession">place for fish and chips</Card.Subtitle>
            <Card.Text className="email">largs@email.com</Card.Text>
        </div>
    )
}

