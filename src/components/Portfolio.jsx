import { Component } from 'react';
import { Col, Card, Ratio } from 'react-bootstrap';

class Portfolio extends Component {
  onPortfolioClick = () => {
    this.props.openModal(this.props.portfolioId);
  };

  onKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();  // prevent scroll on spacebar
      this.onPortfolioClick();
    }
  };

  render() {
    return (
      <Col lg={3} md={6} xs={12} className="mb-3 pt-3">
        <Card
          onClick={this.onPortfolioClick}
          role="button"
          tabIndex={0}
          onKeyDown={this.onKeyDown}
          style={{ cursor: 'pointer' }}
        >
          <Ratio aspectRatio="16x9">
            <Card.Img variant="top" src={this.props.img} />
          </Ratio>
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>{this.props.children}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default Portfolio;