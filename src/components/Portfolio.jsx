import React from 'react'
import { Card } from 'react-bootstrap/lib'

const Portfolio = (props) => {
    return <Card className="col-3 mb-3 pt-3">
        <Card.Img variant="top" src={props.img} style={{backgroundColor: "black"}} />
        <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
                {props.children}
            </Card.Text>
        </Card.Body>
    </Card>
}

export default Portfolio