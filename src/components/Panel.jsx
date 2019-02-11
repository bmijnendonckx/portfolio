import React from 'react'
import { Container, Row } from 'react-bootstrap'

const Panel = (props) => {
    const title = props => {
        if (props.title)
            return <React.Fragment>
                <h1 style={ {color: "#3EABB8"} }>{props.title}</h1>
                <hr style={ {borderColor: "#3EABB8"} }/>
            </React.Fragment>
    }

    return <section id={props.id} className={props.className + " panel"} style={{height: props.height === "landing" ? "100vh" : "auto", backgroundColor: props.colorFlag === "1" ? "#343434" : "#444444"}}>
        <Container style={{height: "100%"}}>
            {title(props)}
            <Row style={{height: props.height === "landing" ? "100%" : "auto"}}>
                {props.children}
            </Row>
        </Container>
    </section>
}

export default Panel;