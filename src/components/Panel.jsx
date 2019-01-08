import React from 'react'
import { Container, Row } from 'react-bootstrap'

const Panel = (props) => {
    function title (props) {
        if (props.title) {
                return <React.Fragment>
                    <h1 style={ {color: "#3EABB8"} }>{props.title}</h1>
                    <hr style={ {borderColor: "#3EABB8"} }/>
                </React.Fragment>
        }
    }

    return <section style={{color: "white", height: props.height === "landing" ? "100vh" : "auto", padding: "4rem 0", backgroundColor: props.colorFlag === "1" ? "#343434" : "#444444"}}>
        <Container style={{height: "100%"}}>
            {title(props)}
            <Row style={{width: "100%", height: props.height === "landing" ? "100%" : "auto"}}>
                {props.children}
            </Row>
        </Container>
    </section>
}

export default Panel;