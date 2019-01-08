import React from 'react';
import { Col, Row, ProgressBar } from 'react-bootstrap/lib'

const Progress = ({title, progress}) => {
    return <Row className="progress-component" style={{alignItems: "center"}}>
        <Col xs={3} className="my-auto">
            <span style={{color: "white", textTransform: "uppercase"}}>{title}</span>
        </Col>
        <Col xs={9}>
            <ProgressBar style={{color: "red"}} now={progress*25} />
        </Col>
    </Row>
}

export default Progress