import React, { Component } from 'react'
import ReactGA from 'react-ga';
//default styling
import 'normalize.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
//FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
//images
import me from './me.svg'
import image from './img/me.jpg'
import citygame from './img/city-game.png'
import unogame from './img/uno-game.png'
import mobilegame from './img/mobile-game.png'
import comicdesign from './img/comic-design.jpg'
//components
import Panel from './components/Panel'
import Navigation from './components/Navigation'
import AboutMe from './components/AboutMe'
import Progress from './components/Progress'
import Portfolio from './components/Portfolio'
import { Row, Col, Form, Button } from 'react-bootstrap/lib'

class App extends Component {
  state = {
      isNavTop: true,
      skills: [
        {
          id: 0,
          title: "html5",
          progress: "3"
        },
        {
          id: 1,
          title: "css",
          progress: "3"
        },
        {
          id: 2,
          title: "js",
          progress: "3"
        },
        {
          id: 3,
          title: "c#",
          progress: "2"
        },
        {
          id: 4,
          title: "java",
          progress: "2"
        },
        {
          id: 5,
          title: "lua",
          progress: "3"
        },
        {
          id: 6,
          title: "sass/scss",
          progress: "3"
        },
        {
          id: 7,
          title: "bootstrap",
          progress: "3"
        },
        {
          id: 8,
          title: "photoshop",
          progress: "3"
        },
        {
          id: 9,
          title: "illustrator",
          progress: "2"
        },
        {
          id: 10,
          title: "git",
          progress: "2"
        },
        {
          id: 11,
          title: "jquery",
          progress: "3"
        },
        {
          id: 12,
          title: "react",
          progress: "2"
        }
      ],
      portfolio: [
        {
          id: "0",
          title: "City builder",
          img: citygame,
          text: "An entry into C# and Unity Project where we got to make our own game."
        },
        {
          id: "1",
          title: "Uno",
          img: unogame,
          text: "A card game made with the MVC model and the usage of Git."
        },
        {
          id: "2",
          title: "Ontdek Antwerpen",
          img: mobilegame,
          text: "A mobile game inspired on Pokemon Go for students who consider studying in Antwerp."
        },
        {
          id: "3",
          title: "Comic Site",
          img: comicdesign,
          text: "A design for a comic site based on Usability theory."
        }
      ]
  }

  componentDidMount() {
    ReactGA.initialize('UA-132431190-1')
    ReactGA.pageview('/portfolio')

    document.addEventListener('scroll', () => {
      const isNavTop = window.scrollY < 100;
      if (isNavTop !== this.state.isNavTop) {
          this.setState({ isNavTop })
      }
    });
  }

  render() {
    const {skills, portfolio} = this.state;
    const skills1 = skills.slice(0, Math.ceil(skills.length/2))
    const skills2 = skills.slice(Math.ceil(skills.length/2), skills.length)

    return (
      <div className="App">
        <Navigation isTop={this.state.isNavTop}/>
        <Panel colorFlag="1" height="landing">
          <div className="d-flex flex-column justify-content-center" style={{color: "white"}}>
              <h1 style={{fontSize: "6rem", marginBottom: "1rem", marginLeft: "-1%"}}>Billy</h1>
              <h6 style={{fontSize: "2rem", fontWeight: "300"}}><span style={{color: "#34A2AE"}}>Junior</span> Front End Developer</h6>
          </div>
          <object data={me} aria-label="me" id="svg" style={{position: "absolute", bottom: "0", right: "0", width: "50%"}}/>
        </Panel>
        <Panel colorFlag="2" title="About Me" id="about">
          <Col sm={12} lg={8}>
            <AboutMe/>
          </Col>
          <Col lg={4} className="d-none d-lg-flex align-items-center">
            <img src={image} alt="me" style={{width: "100%"}}/>
          </Col>
        </Panel>
        <Panel colorFlag="1" title="Skills" id="skills">
          <Col lg="6">
            { skills1.map( skill => <Progress key={skill.id} title={skill.title} progress={skill.progress} /> ) }
          </Col>
          <Col lg="6">
            { skills2.map( skill => <Progress key={skill.id} title={skill.title} progress={skill.progress} /> ) }
          </Col>
        </Panel>
        <Panel colorFlag="2" title="Portfolio" id="portfolio">
          { portfolio.map( item => <Portfolio key={item.id} title={item.title} img={item.img}>{item.text}</Portfolio> ) }     
        </Panel>
        <Panel colorFlag="1" title="Contact" id="contact">
          <Col xs={12}>
            <Form>
              <Row>
                <Col md={6} xs={{span: 12}}>
                  <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Name" />
                  </Form.Group>

                  <Form.Group controlId="formEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Email" />
                  </Form.Group>
                </Col>
                <Col md={6} xs={12}>
                  <Form.Group controlId="formText">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" placeholder="Message" rows="7" />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col sm={12} md={6}>
                  <Button style={{backgroundColor: "#3EABB8", border: "none", marginTop: "-6rem", width: "100%"}} type="submit">
                    Submit
                  </Button>
                </Col>
              </Row>

            </Form>
          </Col>
        </Panel>
        <Panel colorFlag="2">
          <Col xs={12} className="d-flex justify-content-center mb-3">
            <h5>My media links</h5>
          </Col>
          <Col xs={12} className="d-flex justify-content-center align-items-center text-center" id="footerLinks">
              <Col><a href="https://www.linkedin.com/in/billy-mijnendonckx"><FontAwesomeIcon icon={faLinkedin}/> <span>LinkedIn</span></a></Col>
              <Col><a href="https://github.com/bmijnendonckx"><FontAwesomeIcon icon={faGithub}/> <span>Github</span></a></Col>
              <Col><a href="https://twitter.com/bmijnendonckx"><FontAwesomeIcon icon={faTwitter}/> <span>Twitter</span></a></Col>
          </Col>
        </Panel>
      </div>
    );
  }
}

export default App;
