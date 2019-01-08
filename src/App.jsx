import React, { Component } from 'react'
//default styling
import 'normalize.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
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
        <Panel colorFlag="2" title="About Me">
          <Col xl={8} sm={12}>
            <p>Hi there!</p>
            <p>My name is <strong>Billy Mijnendonckx</strong>, former student and tech enthusiast. For the past years I've went through a lot of change, both personally as professionally. I've completed 1.5 years of Multimedia Technology (Virtual 3D), at Karel de Grote Hogeschool in Antwerp, with my mind set on becoming a Game Programmer. In the 2nd year of that course however, due to a task I was given to write an essay about any self-chosen topic (I chose Modular Game Design). I decided to pursue Art in the Game Industry.</p>
            <p>In the middle of my 2nd year I went to register for the course Game Graphics Design at Howest in Kortrijk. The year took off with a great start but at the first milestone (test exams, qweek) my mental state and personal issues were conflicting with my studies. I sat through the entire year trying to get back on track but I didn't get there in time. At the end of the year I was ready to start over with the right mind.</p>
            <p>It's 2018, 2 weeks till college starts again and I got to hear that I am not able to reapply because of my shortage of study points. I quickly chose another course but was getting tired of switching courses. Art felt (and still feels) like what I wanted to do although I am not the best at it.</p>
            <p>Through all these years I've learned most out of own practice, documentation and Youtube tutorials. <strong>I'm willing to take this to the field and learn more from experience.</strong></p>
          </Col>
          <Col xl={4} className="d-none d-md-block">
            <img src={image} alt="me" style={{width: "100%"}}/>
          </Col>
        </Panel>
        <Panel colorFlag="1" title="Skills" style={{height: "auto"}}>
          <Col md="6">
            { skills1.map( skill => <Progress key={skill.id} title={skill.title} progress={skill.progress} /> ) }
          </Col>
          <Col md="6">
            { skills2.map( skill => <Progress key={skill.id} title={skill.title} progress={skill.progress} /> ) }
          </Col>
        </Panel>
        <Panel colorFlag="2" title="Portfolio">
          { portfolio.map( item => <Portfolio key={item.id} title={item.title} img={item.img}>{item.text}</Portfolio> ) }     
        </Panel>
        <Panel colorFlag="1" title="Contact">
          <Col md={12}>
            <Form>
              <Row>
                <Col>
                  <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Name" />
                  </Form.Group>

                  <Form.Group controlId="formEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Email" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formText">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" placeholder="Message" rows="7" />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Button style={{backgroundColor: "#3EABB8", border: "none", marginTop: "-6rem", width: "100%"}} type="submit">
                    Submit
                  </Button>
                </Col>
              </Row>

            </Form>
          </Col>
        </Panel>
        <Panel colorFlag="2">Footer</Panel>
      </div>
    );
  }
}

export default App;
