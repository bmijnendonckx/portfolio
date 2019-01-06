import React, { Component } from 'react'
//default styling
import 'normalize.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
//images
import me from './me.svg'
import image from './img/me.jpg'
//components
import Panel from './components/Panel'
import Navigation from './components/Navigation'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation/>
        <Panel colorFlag="1">
          <div className="d-flex align-items-center" style={{color: "white"}}>
            <div>
              <h1 style={{fontSize: "6rem", marginBottom: "1rem", marginLeft: "-1%"}}>Billy</h1>
              <h6 style={{fontSize: "2rem", fontWeight: "300"}}><span style={{color: "#34A2AE"}}>Junior</span> Front End Developer</h6>
            </div>
            
          </div>
          <object data={me} aria-label="me" id="svg" style={{position: "absolute", bottom: "0", right: "0", width: "50%"}}/>
        </Panel>
        <Panel colorFlag="2" title="About Me">
          <div className="col-xl-8" style={{color: "white"}}>
            <p>Hi there!</p>
            <p>My name is <strong>Billy Mijnendonckx</strong>, former student and tech enthusiast. For the past years I've went through a lot of change, both personally as professionally. I've completed 1.5 years of Multimedia Technology (Virtual 3D), at Karel de Grote Hogeschool in Antwerp, with my mind set on becoming a Game Programmer. In the 2nd year of that course however, due to a task I was given to write an essay about any self-chosen topic (I chose Modular Game Design). I decided to pursue Art in the Game Industry.</p>
            <p>In the middle of my 2nd year I went to register for the course Game Graphics Design at Howest in Kortrijk. With this being at the other side of the country I had no choice but to rent a dorm, which was pretty exciting. However the year took off with a great start, at the first milestone (test exams, qweek) my mental state and personal issues were conflicting with my studies. I sat through the entire year trying to get back on track but I didn't get there in time. At the end of the year I was ready to start over with the right mind.</p>
            <p>It's 2018, 2 weeks till college starts again and I got to hear that I am not able to reapply because of my shortage of study points. I quickly chose another course but was getting tired of switching courses. Art felt (and still feels) like what I wanted to do although I am not the best at it.</p>
            <p>With Art not being an option anymore, I got to hear that my student tuition was 3 times lower and not enough to get through the year. At this point I knew for sure, <strong>I need to get to work!</strong></p>
          </div>
          <div className="col-xl-4">
            <img src={image} alt="me" style={{width: "100%"}}/>
          </div>
        </Panel>
        <Panel colorFlag="1" title="Skills"></Panel>
        <Panel colorFlag="2" title="Portfolio"></Panel>
        <Panel colorFlag="1" title="Contact"></Panel>
        <Panel colorFlag="2"></Panel>
      </div>
    );
  }
}

export default App;
