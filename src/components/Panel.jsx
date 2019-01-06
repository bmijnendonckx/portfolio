import React from 'react'
import { Container, Row } from 'react-bootstrap'

const styles = {
    height: "100vh",
    padding: "4rem 0"
}

const Panel = (props) => {
    function title (props) {
        if (props.title) {
                return <React.Fragment>
                    <h1 style={ {color: "#3EABB8"} }>{props.title}</h1>
                    <hr style={ {borderColor: "#3EABB8"} }/>
                </React.Fragment>
        }
    }

    return <section style={{...styles, backgroundColor: props.colorFlag === "1" ? "#343434" : "#444444"}}>
        <Container style={{height: "100%"}}>
            {title(props)}
            <Row style={{height: "100%"}}>
                {props.children}
            </Row>
        </Container>
    </section>
}

export default Panel;