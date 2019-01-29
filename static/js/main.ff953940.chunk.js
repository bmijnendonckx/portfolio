(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{114:function(e,t,a){e.exports=a.p+"static/media/me.9f612d44.svg"},116:function(e,t,a){e.exports=a(210)},132:function(e,t,a){},210:function(e,t,a){"use strict";a.r(t);var l=a(0),o=a.n(l),r=a(11),n=a.n(r),i=a(38),s=a(39),c=a(44),m=a(40),d=a(45),u=a(68),p=a(41),h=a.n(p);a(124);h.a.initializeApp({apiKey:"AIzaSyAu5qiqgDy8_ahyPqiRx4fWXMEkdV5Nq0o",authDomain:"portfolio-6fbde.firebaseapp.com",databaseURL:"https://portfolio-6fbde.firebaseio.com",projectId:"portfolio-6fbde",storageBucket:"portfolio-6fbde.appspot.com",messagingSenderId:"979387437475"});var g=h.a,E=(a(128),a(130),a(132),a(31)),f=a(46),b=a(113),y=a(114),v=a.n(y),w=a(212),k=a(213),C=function(e){return o.a.createElement("section",{id:e.id,style:{color:"white",height:"landing"===e.height?"100vh":"auto",padding:"4rem 0",backgroundColor:"1"===e.colorFlag?"#343434":"#444444"}},o.a.createElement(w.a,{style:{height:"100%"}},function(e){if(e.title)return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",{style:{color:"#3EABB8"}},e.title),o.a.createElement("hr",{style:{borderColor:"#3EABB8"}}))}(e),o.a.createElement(k.a,{style:{height:"landing"===e.height?"100%":"auto"}},e.children)))},I=a(6),M=function(e){var t=e.isTop;return o.a.createElement(I.Navbar,{variant:"dark",expand:"md",fixed:"top",style:{backgroundColor:t?"inherit":"#008E9E"}},o.a.createElement(I.Navbar.Toggle,{className:"ml-auto","aria-controls":"basic-navbar-nav"}),o.a.createElement(I.Navbar.Collapse,{id:"basic-navbar-nav"},o.a.createElement(I.Nav,{className:"ml-auto"},o.a.createElement(I.Nav.Item,null,o.a.createElement(I.Nav.Link,{className:"mr-3",href:"#about"},"About Me")),o.a.createElement(I.Nav.Item,null,o.a.createElement(I.Nav.Link,{className:"mr-3",href:"#skills"},"Skills")),o.a.createElement(I.Nav.Item,null,o.a.createElement(I.Nav.Link,{className:"mr-3",href:"#portfolio"},"Portfolio")),o.a.createElement(I.Nav.Item,null,o.a.createElement(I.Nav.Link,{className:"mr-3",href:"#contact"},"Contact")))))},N=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,"Hi there!"),o.a.createElement("p",null,"My name is ",o.a.createElement("strong",null,"Billy Mijnendonckx"),", former student and tech enthusiast. For the past years I've went through a lot of change, both personally as professionally. I've completed 1.5 years of Multimedia Technology (Virtual 3D), at Karel de Grote Hogeschool in Antwerp, with my mind set on becoming a Game Programmer. In the 2nd year of that course however, due to a task I was given to write an essay about any self-chosen topic (I chose Modular Game Design). I decided to pursue Art in the Game Industry."),o.a.createElement("p",null,"In the middle of my 2nd year I went to register for the course Game Graphics Design at Howest in Kortrijk. The year took off with a great start but at the first milestone (test exams, qweek) my mental state and personal issues were conflicting with my studies. I sat through the entire year trying to get back on track but I didn't get there in time. At the end of the year I was ready to start over with the right mind."),o.a.createElement("p",null,"It's 2018, 2 weeks till college starts again and I got to hear that I am not able to reapply because of my shortage of study points. I quickly chose another course but was getting tired of switching courses. Art felt (and still feels) like what I wanted to do although I am not the best at it."),o.a.createElement("p",null,"Through all these years I've learned most out of own practice, documentation and Youtube tutorials. ",o.a.createElement("strong",null,"I'm willing to take this to the field and learn more from experience.")))},x=function(e){var t=e.title,a=e.progress;return o.a.createElement(I.Row,{className:"progress-component",style:{alignItems:"center"}},o.a.createElement(I.Col,{xs:3,className:"my-auto"},o.a.createElement("span",{style:{color:"white",textTransform:"uppercase"}},t)),o.a.createElement(I.Col,{xs:9},o.a.createElement(I.ProgressBar,{style:{color:"red"},now:25*a})))},j=function(e){function t(){var e,a;Object(i.a)(this,t);for(var l=arguments.length,o=new Array(l),r=0;r<l;r++)o[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).onPortfolioClick=function(){a.props.openModal(a.props.portfolioId)},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement(I.Col,{lg:3,md:6,xs:12,className:"mb-3 pt-3"},o.a.createElement(I.Card,{onClick:this.onPortfolioClick},o.a.createElement(I.Card.Img,{variant:"top",src:this.props.img,style:{backgroundColor:"black"}}),o.a.createElement(I.Card.Body,null,o.a.createElement(I.Card.Title,null,this.props.title),o.a.createElement(I.Card.Text,null,this.props.children))))}}]),t}(l.Component),F=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(c.a)(this,Object(m.a)(t).call(this))).openModal=function(t){e.setState({isModalOpen:!0,currentModal:t})},e.closeModal=function(){e.setState({isModalOpen:!1})},e.state={isNavTop:!0,skills:[{id:0,title:"html5",progress:"3"},{id:1,title:"css",progress:"3"},{id:2,title:"js",progress:"3"},{id:3,title:"c#",progress:"2"},{id:4,title:"java",progress:"2"},{id:5,title:"lua",progress:"3"},{id:6,title:"sass/scss",progress:"3"},{id:7,title:"bootstrap",progress:"3"},{id:8,title:"photoshop",progress:"3"},{id:9,title:"illustrator",progress:"2"},{id:10,title:"git",progress:"2"},{id:11,title:"jquery",progress:"3"},{id:12,title:"react",progress:"2"}],isModalOpen:!1,currentModal:0,portfolio:[{id:0,title:"Sample Text",img:"https://firebasestorage.googleapis.com/v0/b/portfolio-6fbde.appspot.com/o/city-game.png?alt=media&token=5713a58e-94e0-4c48-9d0f-fc516bd7d244",description:"Lorem ipsum",text:""}]},e}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;u.a.initialize("UA-132431190-1"),u.a.pageview("/portfolio"),g.firestore().collection("Portfolio").orderBy("id").get().then(function(t){var a=[];t.forEach(function(e){a.push(e.data())}),console.log(a),e.setState({portfolio:a})}),document.addEventListener("scroll",function(){var t=window.scrollY<100;t!==e.state.isNavTop&&e.setState({isNavTop:t})})}},{key:"render",value:function(){var e=this,t=this.state,a=t.skills,l=t.portfolio,r=a.slice(0,Math.ceil(a.length/2)),n=a.slice(Math.ceil(a.length/2),a.length);return o.a.createElement("div",{className:"App"},o.a.createElement(M,{isTop:this.state.isNavTop}),o.a.createElement(C,{colorFlag:"1",height:"landing"},o.a.createElement("div",{className:"d-flex flex-column justify-content-center",style:{color:"white"}},o.a.createElement("h1",{style:{fontSize:"6rem",marginBottom:"1rem",marginLeft:"-1%"}},"Billy"),o.a.createElement("h6",{style:{fontSize:"2rem",fontWeight:"300"}},o.a.createElement("span",{style:{color:"#34A2AE"}},"Junior")," Front End Developer")),o.a.createElement("object",{data:v.a,"aria-label":"me",id:"svg",style:{position:"absolute",bottom:"0",right:"0",width:"50%"}})),o.a.createElement(C,{colorFlag:"2",title:"About Me",id:"about"},o.a.createElement(I.Col,{sm:12,lg:8},o.a.createElement(N,null)),o.a.createElement(I.Col,{lg:4,className:"d-none d-lg-flex align-items-center"},o.a.createElement("img",{src:"https://firebasestorage.googleapis.com/v0/b/portfolio-6fbde.appspot.com/o/me.jpg?alt=media&token=85db9b5b-d8d8-4914-b546-bd767d3116bb",alt:"me",style:{width:"100%"}}))),o.a.createElement(C,{colorFlag:"1",title:"Skills",id:"skills"},o.a.createElement(I.Col,{lg:"6"},r.map(function(e){return o.a.createElement(x,{key:e.id,title:e.title,progress:e.progress})})),o.a.createElement(I.Col,{lg:"6"},n.map(function(e){return o.a.createElement(x,{key:e.id,title:e.title,progress:e.progress})})),o.a.createElement(I.Button,{variant:"primary",id:"btn-cv"},o.a.createElement("a",{href:"https://drive.google.com/file/d/1J_CaZqc3KGDYQR-oAwO8SE3vm75cf1pi/view?usp=sharing"},o.a.createElement(E.a,{icon:b.a})," curriculum vitae"))),o.a.createElement(C,{colorFlag:"2",title:"Portfolio",id:"portfolio"},o.a.createElement(I.Modal,{show:this.state.isModalOpen,onHide:this.closeModal,size:"lg",centered:!0},o.a.createElement(I.Modal.Header,{closeButton:!0},o.a.createElement(I.Modal.Title,{id:"contained-modal-title-vcenter"},this.state.portfolio[this.state.currentModal].title)),o.a.createElement(I.Modal.Body,null,o.a.createElement(I.Container,null,o.a.createElement(I.Row,null,o.a.createElement(I.Col,{md:6},o.a.createElement(I.Carousel,null,o.a.createElement(I.Carousel.Item,null,o.a.createElement("img",{src:this.state.portfolio[this.state.currentModal].img,alt:this.state.portfolio[this.state.currentModal].title,style:{width:"100%"}})),o.a.createElement(I.Carousel.Item,null,o.a.createElement("img",{src:this.state.portfolio[this.state.currentModal].img,alt:this.state.portfolio[this.state.currentModal].title,style:{width:"100%"}})))),o.a.createElement(I.Col,{md:6},this.state.portfolio[this.state.currentModal].text)))),o.a.createElement(I.Modal.Footer,null,o.a.createElement(I.Button,{onClick:this.closeModal},"Close"))),l.map(function(t){return o.a.createElement(j,{key:t.id,portfolioId:t.id,title:t.title,img:t.img,openModal:e.openModal},t.description)})),o.a.createElement(C,{colorFlag:"1",title:"Contact",id:"contact"},o.a.createElement(I.Col,{xs:12},o.a.createElement(I.Form,null,o.a.createElement(I.Row,null,o.a.createElement(I.Col,{md:6,xs:{span:12}},o.a.createElement(I.Form.Group,{controlId:"formName"},o.a.createElement(I.Form.Label,null,"Name"),o.a.createElement(I.Form.Control,{type:"text",placeholder:"Name"})),o.a.createElement(I.Form.Group,{controlId:"formEmail"},o.a.createElement(I.Form.Label,null,"Email address"),o.a.createElement(I.Form.Control,{type:"email",placeholder:"Email"}))),o.a.createElement(I.Col,{md:6,xs:12},o.a.createElement(I.Form.Group,{controlId:"formText"},o.a.createElement(I.Form.Label,null,"Message"),o.a.createElement(I.Form.Control,{as:"textarea",placeholder:"Message",rows:"7"})))),o.a.createElement(I.Row,null,o.a.createElement(I.Col,{sm:12,md:6},o.a.createElement(I.Button,{style:{marginTop:"-6rem",width:"100%"},type:"submit"},"Submit")))))),o.a.createElement(C,{colorFlag:"2"},o.a.createElement(I.Col,{xs:12,className:"d-flex justify-content-center mb-3"},o.a.createElement("h5",null,"My media links")),o.a.createElement(I.Col,{xs:12,className:"d-flex justify-content-center align-items-center text-center",id:"footerLinks"},o.a.createElement(I.Col,null,o.a.createElement("a",{href:"https://www.linkedin.com/in/billy-mijnendonckx"},o.a.createElement(E.a,{icon:f.b})," ",o.a.createElement("span",null,"LinkedIn"))),o.a.createElement(I.Col,null,o.a.createElement("a",{href:"https://github.com/bmijnendonckx"},o.a.createElement(E.a,{icon:f.a})," ",o.a.createElement("span",null,"Github"))),o.a.createElement(I.Col,null,o.a.createElement("a",{href:"https://twitter.com/bmijnendonckx"},o.a.createElement(E.a,{icon:f.c})," ",o.a.createElement("span",null,"Twitter"))))))}}]),t}(l.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(o.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[116,2,1]]]);
//# sourceMappingURL=main.ff953940.chunk.js.map