import React from 'react';
import { Row, ProgressBar } from 'react-bootstrap/lib'

const Progress = ({title, progress}) => {
    return <Row className="progress-component" style={{alignItems: "center"}}>
        <div className="col-3 my-auto">
            <span style={{color: "white", textTransform: "uppercase"}}>{title}</span>
        </div>
        <div className="col-9">
            <ProgressBar style={{color: "red"}} now={progress*25} />
        </div>
    </Row>
}

export default Progress