(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{114:function(e,t,a){e.exports=a.p+"static/media/me.81ad87d3.svg"},116:function(e,t,a){e.exports=a(210)},132:function(e,t,a){},210:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),o=a(11),r=a.n(o),i=a(40),c=a(41),s=a(46),m=a(42),d=a(47),u=a(69),p=a(43),h=a.n(p);a(124);h.a.initializeApp({apiKey:"AIzaSyAu5qiqgDy8_ahyPqiRx4fWXMEkdV5Nq0o",authDomain:"portfolio-6fbde.firebaseapp.com",databaseURL:"https://portfolio-6fbde.firebaseio.com",projectId:"portfolio-6fbde",storageBucket:"portfolio-6fbde.appspot.com",messagingSenderId:"979387437475"});var f=h.a,E=(a(128),a(130),a(132),a(33)),g=a(24),v=a(48),b=a(15),y=a(114),k=a.n(y),w=a(212),N=a(213),C=function(e){return n.a.createElement("section",{id:e.id,className:e.className+" panel",style:{height:"landing"===e.height?"100vh":"auto",backgroundColor:"1"===e.colorFlag?"#343434":"#444444"}},n.a.createElement(w.a,{style:{height:"100%"}},function(e){if(e.title)return n.a.createElement(n.a.Fragment,null,n.a.createElement("h1",null,e.title),n.a.createElement("hr",null))}(e),n.a.createElement(N.a,{style:{height:"landing"===e.height?"100%":"auto"}},e.children)))},M=a(7),x=function(e){var t=e.isTop;return n.a.createElement(M.Navbar,{variant:"dark",expand:"md",fixed:"top",style:{backgroundColor:t?"inherit":"#008E9E"}},n.a.createElement(M.Navbar.Toggle,{className:"ml-auto","aria-controls":"basic-navbar-nav"}),n.a.createElement(M.Navbar.Collapse,{id:"basic-navbar-nav"},n.a.createElement(M.Nav,{className:"ml-auto"},n.a.createElement(M.Nav.Item,null,n.a.createElement(M.Nav.Link,{className:"mr-3",href:"#about"},"About Me")),n.a.createElement(M.Nav.Item,null,n.a.createElement(M.Nav.Link,{className:"mr-3",href:"#skills"},"Skills")),n.a.createElement(M.Nav.Item,null,n.a.createElement(M.Nav.Link,{className:"mr-3",href:"#portfolio"},"Portfolio")),n.a.createElement(M.Nav.Item,null,n.a.createElement(M.Nav.Link,{className:"mr-3",href:"#contact"},"Contact")))))},I=function(){return n.a.createElement("div",{id:"about-content"},n.a.createElement("p",null,"Hi there!"),n.a.createElement("p",null,"My name is ",n.a.createElement("strong",null,"Billy Mijnendonckx"),", former student and tech enthusiast."),n.a.createElement("p",null,"I've completed 1.5 years of Multimedia Technology (Virtual 3D), at Karel de Grote Hogeschool in Antwerp, with my mind set on becoming a Game Programmer."),n.a.createElement("p",null,"In the 2nd year of that course I decided to do Game Graphics Production at Howest's Digital Arts and Entertainment since I felt that programming was something I can teach myself."),n.a.createElement("p",null,"Due to personal issues that were conflicting with my studies that year, I couldn't continue GGP. Art felt (and still feels) like what I wanted to do although I am not the best at it."),n.a.createElement("p",null,"Through all these years I've learned most out of own practice, documentation and Youtube tutorials. ",n.a.createElement("strong",null,"I'm willing to take this to the field and learn more from experience.")))},j=function(e){var t=e.title,a=e.progress;return n.a.createElement(M.Row,{className:"progress-component",style:{alignItems:"center"}},n.a.createElement(M.Col,{xs:3,className:"my-auto"},n.a.createElement("span",{style:{color:"white",textTransform:"uppercase"}},t)),n.a.createElement(M.Col,{xs:9},n.a.createElement(M.ProgressBar,{style:{color:"red"},now:25*a})))},O=function(e){function t(){var e,a;Object(i.a)(this,t);for(var l=arguments.length,n=new Array(l),o=0;o<l;o++)n[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).onPortfolioClick=function(){a.props.openModal(a.props.portfolioId)},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement(M.Col,{lg:3,md:6,xs:12,className:"mb-3 pt-3"},n.a.createElement(M.Card,{onClick:this.onPortfolioClick},n.a.createElement("div",{className:"a16-9"},n.a.createElement("div",{className:"inside-aspect-ratio",style:{backgroundColor:"red"}},n.a.createElement(M.Card.Img,{variant:"top",src:this.props.img}))),n.a.createElement(M.Card.Body,null,n.a.createElement(M.Card.Title,null,this.props.title),n.a.createElement(M.Card.Text,null,this.props.children))))}}]),t}(l.Component),T=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).openModal=function(t){e.setState({isModalOpen:!0,currentModal:t})},e.closeModal=function(){e.setState({isModalOpen:!1})},e.renderPortfolio=function(t){for(var a=[],l=t.length<4?t.length:4,o=Math.ceil(t.length/4),r=0;r<o;r++){for(var i=[],c=0;c<l;c++){var s=t[r*l+c];i.push(n.a.createElement(O,{key:s.id,portfolioId:s.id,title:s.title,img:s.img[0],openModal:e.openModal},s.description))}a.push(n.a.createElement(M.Row,{key:r},i))}return a},e.state={isNavTop:!0,skills:[{id:0,title:"html5",progress:3}],isModalOpen:!1,currentModal:0,portfolio:[{id:0,title:"Sample Text",img:["https://firebasestorage.googleapis.com/v0/b/portfolio-6fbde.appspot.com/o/city-game.jpg?alt=media&token=370e32f0-0c66-42e0-b708-ff1a1c30c0d9"],description:"Lorem ipsum",text:""}]},E.b.add(v.b,v.c,v.a,b.c,b.b,b.d,b.i,b.a,b.f,b.h,b.g,b.e),e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;u.a.initialize("UA-132431190-1"),u.a.pageview("/portfolio"),f.firestore().collection("Portfolio").orderBy("id").get().then(function(t){var a=[];t.forEach(function(e){a.push(e.data())}),e.setState({portfolio:a})}),f.firestore().collection("Skills").orderBy("progress","desc").get().then(function(t){var a=[];t.forEach(function(e){a.push(e.data())}),e.setState({skills:a})}),document.addEventListener("scroll",function(){var t=window.scrollY<100;t!==e.state.isNavTop&&e.setState({isNavTop:t})})}},{key:"render",value:function(){var e=this,t=this.state,a=t.skills,l=t.portfolio,o=a.slice(0,Math.ceil(a.length/2)),r=a.slice(Math.ceil(a.length/2),a.length);return n.a.createElement("div",{className:"App"},n.a.createElement(x,{isTop:this.state.isNavTop}),n.a.createElement(C,{colorFlag:"1",height:"landing"},n.a.createElement("div",{className:"d-flex flex-column justify-content-center",style:{color:"white"}},n.a.createElement("h1",{style:{fontSize:"6rem",marginBottom:"1rem",marginLeft:"-1%"}},"Billy"),n.a.createElement("h6",{style:{fontSize:"2rem",fontWeight:"300"}},n.a.createElement("span",{style:{color:"#34A2AE"}},"Junior")," Front End Developer")),n.a.createElement("object",{className:"d-none d-md-block",type:"image/svg+xml",data:k.a,"aria-label":"me",id:"svg"})),n.a.createElement(C,{colorFlag:"2",title:"About Me",id:"about"},n.a.createElement(M.Col,{sm:12,lg:8},n.a.createElement(I,null)),n.a.createElement(M.Col,{lg:4,className:"d-none d-lg-block"},n.a.createElement("img",{src:"https://firebasestorage.googleapis.com/v0/b/portfolio-6fbde.appspot.com/o/me.jpg?alt=media&token=58ec7d87-ae90-4350-a16d-7db4f994915d",alt:"me",style:{width:"100%"}}))),n.a.createElement(C,{colorFlag:"1",title:"Skills",id:"skills"},n.a.createElement(M.Col,{lg:"6"},o.map(function(e){return n.a.createElement(j,{key:e.id,title:e.title,progress:e.progress})})),n.a.createElement(M.Col,{lg:"6"},r.map(function(e){return n.a.createElement(j,{key:e.id,title:e.title,progress:e.progress})})),n.a.createElement(M.Button,{variant:"primary",id:"btn-cv"},n.a.createElement(g.a,{icon:"file-pdf"}),n.a.createElement("a",{href:"https://drive.google.com/file/d/1J_CaZqc3KGDYQR-oAwO8SE3vm75cf1pi/view?usp=sharing"},"curriculum vitae"),n.a.createElement(g.a,{icon:"external-link-alt"}))),n.a.createElement(C,{colorFlag:"2",title:"Portfolio",id:"portfolio"},n.a.createElement(M.Modal,{show:this.state.isModalOpen,onHide:this.closeModal,size:"lg",centered:!0},n.a.createElement(M.Modal.Header,{closeButton:!0},n.a.createElement(M.Modal.Title,{id:"contained-modal-title-vcenter"},this.state.portfolio[this.state.currentModal].title)),n.a.createElement(M.Modal.Body,null,n.a.createElement(M.Container,null,n.a.createElement(M.Row,null,n.a.createElement(M.Col,{md:6},n.a.createElement(M.Carousel,null,l[this.state.currentModal].img.map(function(t,a){return n.a.createElement(M.Carousel.Item,{key:a},n.a.createElement("img",{src:t,alt:l[e.state.currentModal].title,style:{width:"100%"}}))}))),n.a.createElement(M.Col,{md:6},this.state.portfolio[this.state.currentModal].text)))),n.a.createElement(M.Modal.Footer,null,n.a.createElement(M.Button,{onClick:this.closeModal},"Close"))),this.renderPortfolio(l)),n.a.createElement(C,{colorFlag:"1",title:"Contact",id:"contact"},n.a.createElement(M.Col,{className:"text-center mt-5 mb-3"},n.a.createElement("p",{className:"contact"},"feel free to mail me @ ",n.a.createElement("a",{href:"mailto:bmijnendonckx@gmail.com"},"bmijnendonckx@gmail.com")),n.a.createElement("p",{className:"contact"},"or give me a call ",n.a.createElement("span",null,"+324 84 95 70 35")))),n.a.createElement(C,{colorFlag:"2",className:"footer"},n.a.createElement(M.Col,{xs:12,className:"d-flex justify-content-center mb-3"},n.a.createElement("h5",null,"My media links")),n.a.createElement(M.Col,{xs:12,className:"d-flex justify-content-center align-items-center text-center",id:"footerLinks"},n.a.createElement(M.Col,null,n.a.createElement("a",{href:"https://www.linkedin.com/in/billy-mijnendonckx"},n.a.createElement(g.a,{icon:["fab","linkedin"]})," ",n.a.createElement("span",null,"LinkedIn"))),n.a.createElement(M.Col,null,n.a.createElement("a",{href:"https://github.com/bmijnendonckx"},n.a.createElement(g.a,{icon:["fab","github"]})," ",n.a.createElement("span",null,"Github"))),n.a.createElement(M.Col,null,n.a.createElement("a",{href:"https://twitter.com/bmijnendonckx"},n.a.createElement(g.a,{icon:["fab","twitter"]})," ",n.a.createElement("span",null,"Twitter"))))))}}]),t}(l.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[116,2,1]]]);
//# sourceMappingURL=main.1ef7fded.chunk.js.map