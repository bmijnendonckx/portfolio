import React, { Component } from 'react'
import { Col, Card } from 'react-bootstrap/lib'

class Portfolio extends Component {
    state = {
        isClicked: false
    }

    openPortfolio = () => {
        this.setState({
            isClicked: !this.state.isClicked
        })
    }

    render() {
        return <Col lg={3} md={6} xs={12} className="mb-3 pt-3" >
            <Card onClick = {this.openPortfolio}>
                <Card.Img variant="top" src={this.props.img} style={{backgroundColor: "black"}} />
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>
                        {this.props.children}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    }
}

export default Portfolio