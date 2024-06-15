import { useEffect, useState } from "react";
import "./App.css";
import { useSpring, animated } from '@react-spring/web'




//img
import profile from "./imgs/_MG_0365.jpg";
import panda from './imgs/panda.png';
import parsasite from './imgs/resume1.png';
import call from './icon/call.svg';
import mail from './icon/mail.svg';

function App() {
  const [timeimg, setTimeimg] = useState(true);
  const [rotatevalue, setRotateValue] = useState(0);
  const [translatevalue, setTranslateValue] = useState(200);
  const [number, setNumber] = useState(false);
  const [email, setEmail] = useState(false);


  setTimeout(() => {
    setTimeimg(false);
  }, 5000);
  useEffect(() => {
    if (timeimg && translatevalue >= 0) {
      setInterval(() => {
        setTranslateValue((t) => t - 1);
      }, 400);
    } else {
      setTranslateValue(0);
    }
  }, [translatevalue]);
  useEffect(() => {
    if (timeimg) {
      setInterval(() => {
        setRotateValue((r) => r - 1);
      }, 250);
    }
  }, [rotatevalue]);
  const handleNumber = (target)=>{
    if (number ==false){setNumber(true)
    apiNum.start({
    from : {
      x : -100,
    } ,
    to:{
    x : 0,
    },
    })
    } 
    else if(number==true){setNumber(false)
    }
  }
  const handleEmail = (target)=>{
    if (email ==false) {setEmail(true)
      api.start({
        from: {
          x: 100,
        
        },
        to: {
          x: 0,
        },
      })
    }
    else if(email==true) {setEmail(false)
    }
  }

  const [springMail, api] = useSpring(() => ({
    from: { x: 100 },
  }))
  const [springNum, apiNum] = useSpring(() => ({
    from: { x: -100 },
  }))






  return (
    <div className="App">
      <header>
        <div className="menu-side">
          <div className="menu-bar">
            <span className="aboutme txt-menu" > <a href="#aboutme">about me</a></span>
            <span className="resume txt-menu" ><a href="#resume">resume</a></span>
            <span className="contactus txt-menu" ><a href="#contactus">contact us</a>  </span>
          </div>
        </div>
        <div className="info-side">
          <div className="info">
            <img
              className={`${timeimg ? "animation-img" : ""} profile-img`}
              style={
                timeimg
                  ? {
                      transform: `rotate(${rotatevalue}deg)`,
                      transformOrigin: "center",
                      translate: `${translatevalue}%`,
                      zIndex: `${timeimg ? "1" : "0"}`,
                      filter: "brightness(0.054)",
                    }
                  : {}
              }
              src={profile}
            />
            <span className="name">Amir Parsa Nazarpour</span>
            <span className="birthday">2005 21 September</span>
            <span className="job">FrontEnd Developer 💻</span>
            <span className="about">
              . «Be attentive about your thought that becomes your behavior» «Be
              attentive about your behavior that becomes your speech» «Be
              attentive about your speech because it becomes your habit» «Be
              attentive about your habit because it becomes your personality»
              «Be attentive about your personality because it becomes your
              destiny»
            </span>
          </div>
        </div>
      </header>
      <section>
        <div className="aboutme" id="aboutme">
          <span className="aboutme-txt">About me</span>
          <div className="aboutme-description">
            Hi, Im Parsa
            <br />
            I know : htmlCss javaScript tailwind react and
            <br />
            typescript. and i’ve been learning new Course in life and in work!
            <br />
             i like musik and paint --wait! i love making an idea and my hobies contain : draw and mind games 
            <br />
             trust me and trust your self.
            <br />
            GoodLuck...
          </div>
            <img className="panda-img" src={panda}/>
        </div>
        <div className="resume-list" id="resume">
            <a className="parsa-site" target="_blank" href="https://github.com/parsafolgen/porfolio">
            <img src={parsasite} alt="" /></a>
            </div>
      </section>
      <footer id="contactus">
        <span className="number-div">
          <span className="number" onClick={handleNumber}>
          <img className="call" src={call} alt="" />
          
        </span>
        <animated.span className={
          `number-txt ${number ? "number-on" : ""}`
          } style={{...springNum}} >
          <a  href="tel:+989906564302">(+98)09906564302</a>
          </animated.span>
        
        </span>
        <span className="email-div">
          <span className="email" onClick={handleEmail}>
        <img className="mail" src={mail} alt="" />
        
        </span>
        <animated.span 
        className={`email-txt ${email ? "email-on" : ""}`}
        style={{...springMail}}>
           <a href="mailto:amirparsafolgen@gmail.com">
            Amirparsafolgen@gmail.com</a>
           </animated.span>
        </span>
        
      </footer>
    </div>
  );
}

export default App;
