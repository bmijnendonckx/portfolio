import React, { Component } from 'react'
import { Col, Card } from 'react-bootstrap/lib'

class Portfolio extends Component {
    onPortfolioClick = () => {
        this.props.openModal(this.props.portfolioId)
    }

    render() {
        return <Col lg={3} md={6} xs={12} className="mb-3 pt-3" >
            <Card onClick={this.onPortfolioClick}>
                <div className="a16-9">
                    <div className="inside-aspect-ratio" style={{backgroundColor: "red"}}>
                        <Card.Img variant="top" src={this.props.img} />
                    </div>
                </div>
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