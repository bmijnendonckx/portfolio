import React, { Component } from 'react'
import ReactGA from 'react-ga'
//Firestore
import firebase from './components/Firestore'
//default styling
import 'normalize.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
//FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'
//svg
import me from './me.svg'
//components
import Panel from './components/Panel'
import Navigation from './components/Navigation'
import AboutMe from './components/AboutMe'
import Progress from './components/Progress'
import Portfolio from './components/Portfolio'
import { Container, Row, Col, Button, Modal, Carousel } from 'react-bootstrap/lib'

class App extends Component {
  constructor() {
    super()

    this.state = {
      isNavTop: true,
      skills: [
        {
          id: 0,
          title: "html5",
          progress: 3
        },
        {
          id: 1,
          title: "css3",
          progress: 3
        },
        {
          id: 2,
          title: "js/es6",
          progress: 3
        },
        {
          id: 3,
          title: "c#",
          progress: 2
        },
        {
          id: 4,
          title: "java",
          progress: 2
        },
        {
          id: 5,
          title: "lua",
          progress: 3
        },
        {
          id: 6,
          title: "sass/scss",
          progress: 3
        },
        {
          id: 7,
          title: "bootstrap",
          progress: 3
        },
        {
          id: 8,
          title: "photoshop",
          progress: 3
        },
        {
          id: 9,
          title: "illustrator",
          progress: 2
        },
        {
          id: 10,
          title: "git",
          progress: 2
        },
        {
          id: 11,
          title: "jquery",
          progress: 3
        },
        {
          id: 12,
          title: "react",
          progress: 2
        }
      ],
      isModalOpen: false,
      currentModal: 0,
      portfolio: [
        {
          id: 0,
          title: "Sample Text",
          img: [
            'https://firebasestorage.googleapis.com/v0/b/portfolio-6fbde.appspot.com/o/city-game.png?alt=media&token=5713a58e-94e0-4c48-9d0f-fc516bd7d244'
          ],
          description: "Lorem ipsum",
          text: ""
        }
      ]
    }    
  }

  componentDidMount() {
    ReactGA.initialize('UA-132431190-1')
    ReactGA.pageview('/portfolio')

    firebase.firestore().collection("Portfolio").orderBy("id").get().then(
      snap => {
        const portfolio = []

        snap.forEach(doc => {
          portfolio.push(doc.data())
        })

        //console.log(portfolio)

        this.setState({
          portfolio: portfolio
        })
      }
    )

    document.addEventListener('scroll', () => {
      const isNavTop = window.scrollY < 100;
      if (isNavTop !== this.state.isNavTop) {
          this.setState({ isNavTop })
      }
    })

  }

  openModal = (id) => {
    this.setState({
      isModalOpen: true,
      currentModal: id
    })
  }

  closeModal = () => {
    this.setState({
      isModalOpen: false
    })
  }

  renderPortfolio = (portfolio) => {
    let content = []
    const cols = portfolio.length < 4 ? portfolio.length : 4
    const rows = Math.ceil(portfolio.length/4)

    for(let row = 0; row < rows; row++) {
      let children = []

      for(let col = 0; col < cols; col++) {
        const item = portfolio[(row*cols)+col]
        children.push(<Portfolio key={item.id} portfolioId={item.id} title={item.title} img={item.img[0]} openModal={this.openModal}>{item.description}</Portfolio>)
      }

      content.push(<Row key={row}>{children}</Row>) 
    }

    return content
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
            <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-6fbde.appspot.com/o/me.jpg?alt=media&token=85db9b5b-d8d8-4914-b546-bd767d3116bb" alt="me" style={{width: "100%"}}/>
          </Col>
        </Panel>
        <Panel colorFlag="1" title="Skills" id="skills">
          <Col lg="6">{ skills1.map( skill => <Progress key={skill.id} title={skill.title} progress={skill.progress} /> ) }</Col>
          <Col lg="6">{ skills2.map( skill => <Progress key={skill.id} title={skill.title} progress={skill.progress} /> ) }</Col>
          <Button variant="primary" id="btn-cv"><a href="https://drive.google.com/file/d/1J_CaZqc3KGDYQR-oAwO8SE3vm75cf1pi/view?usp=sharing"><FontAwesomeIcon icon={faFilePdf}/> curriculum vitae</a></Button>
        </Panel>
        <Panel colorFlag="2" title="Portfolio" id="portfolio">
          <Modal show={this.state.isModalOpen} onHide={this.closeModal} size="lg" centered>
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                  { this.state.portfolio[this.state.currentModal].title }
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Container>
                <Row>
                  <Col md={6}>
                    <Carousel>
                      { portfolio[this.state.currentModal].img.map((img, index) => 
                        <Carousel.Item key={index}>
                          <img src={img} alt={portfolio[this.state.currentModal].title} style={{width: "100%"}}/>
                        </Carousel.Item>
                      ) }
                    </Carousel>
                    
                  </Col>
                  <Col md={6}>
                    {this.state.portfolio[this.state.currentModal].text}
                  </Col>
                </Row>
              </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={this.closeModal}>Close</Button>
            </Modal.Footer>
          </Modal>
          { this.renderPortfolio(portfolio) }
        </Panel>
        <Panel colorFlag="1" title="Contact" id="contact">
          <Col className="text-center mt-5 mb-3">
            <p className="contact">feel free to mail me @ <a href="mailto:bmijnendonckx@gmail.com">bmijnendonckx@gmail.com</a></p>
            <p className="contact">or give me a call <span>+324 84 95 70 35</span></p>
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
