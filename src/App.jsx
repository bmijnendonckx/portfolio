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
import Progress from './components/Progress'


class App extends Component {
  state = {
      isNavTop: true
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
    return (
      <div className="App">
        <Navigation isTop={this.state.isNavTop}/>
        <Panel colorFlag="1" height="landing">
          <div className="d-flex align-items-center" style={{color: "white"}}>
            <div>
              <h1 style={{fontSize: "6rem", marginBottom: "1rem", marginLeft: "-1%"}}>Billy</h1>
              <h6 style={{fontSize: "2rem", fontWeight: "300"}}><span style={{color: "#34A2AE"}}>Junior</span> Front End Developer</h6>
            </div>
            
          </div>
          <object data={me} aria-label="me" id="svg" style={{position: "absolute", bottom: "0", right: "0", width: "50%"}}/>
        </Panel>
        <Panel colorFlag="2" title="About Me">
          <div className="col-xl-8 col-sm-12" style={{color: "white"}}>
            <p>Hi there!</p>
            <p>My name is <strong>Billy Mijnendonckx</strong>, former student and tech enthusiast. For the past years I've went through a lot of change, both personally as professionally. I've completed 1.5 years of Multimedia Technology (Virtual 3D), at Karel de Grote Hogeschool in Antwerp, with my mind set on becoming a Game Programmer. In the 2nd year of that course however, due to a task I was given to write an essay about any self-chosen topic (I chose Modular Game Design). I decided to pursue Art in the Game Industry.</p>
            <p>In the middle of my 2nd year I went to register for the course Game Graphics Design at Howest in Kortrijk. The year took off with a great start but at the first milestone (test exams, qweek) my mental state and personal issues were conflicting with my studies. I sat through the entire year trying to get back on track but I didn't get there in time. At the end of the year I was ready to start over with the right mind.</p>
            <p>It's 2018, 2 weeks till college starts again and I got to hear that I am not able to reapply because of my shortage of study points. I quickly chose another course but was getting tired of switching courses. Art felt (and still feels) like what I wanted to do although I am not the best at it.</p>
            <p>Through all these years I've learned most out of own practice, documentation and Youtube tutorials. <strong>I'm willing to take this to the field and learn more from experience.</strong></p>
          </div>
          <div className="col-xl-4 d-none d-md-block">
            <img src={image} alt="me" style={{width: "100%"}}/>
          </div>
        </Panel>
        <Panel colorFlag="1" title="Skills" style={{height: "auto"}}>
          <div className="col-lg">
            <Progress title="html5" progress="3" />
            <Progress title="css" progress="3" />
            <Progress title="js" progress="3" />
            <Progress title="c#" progress="2" />
            <Progress title="java" progress="2" />
            <Progress title="lua" progress="3" />
            <Progress title="sass/scss" progress="3" />
            <Progress title="bootstrap" progress="3" />
          </div>
          <div className="col-lg">
            <Progress title="photoshop" progress="3" />
            <Progress title="illustrator" progress="2" />
            <Progress title="git" progress="2" />
            <Progress title="jquery" progress="2" />
          </div>
        </Panel>
        <Panel colorFlag="2" title="Portfolio"></Panel>
        <Panel colorFlag="1" title="Contact"></Panel>
      </div>
    );
  }
}

export default App;
