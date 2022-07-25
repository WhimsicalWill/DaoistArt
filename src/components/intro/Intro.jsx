import './intro.scss'
import { init } from 'ityped'
import { useEffect, useRef } from 'react'
import Button from "@mui/material/Button"
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
// import { TwitterIcon, LinkedInIcon, GitHubIcon } from '@material-ui/icons-material/';
// import { TwitterIcon, LinkedInIcon, GitHubIcon } from '@mui/icons-material/';
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from '@mui/material/Link';

export default function Intro() {

  const textRef = useRef();

  useEffect(()=>{
    init(textRef.current, {
      showCursor: true,
      strings: ["a software engineer", "an applied mathematician",  "an ML/DL Engineer"],
      backDelay: 1500,
      backSpeed: 25,
    })
  },[])

  const theme = createTheme({
    status: {
      danger: '#e53e3e',
    },
    palette: {
      primary: {
        main: '#0971f1',
        darker: '#15023a',
      },
      neutral: {
        main: '#64748B',
        contrastText: '#fff',
      },
    },
  });

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/profile.jpg" alt=""/>
        </div>
        <div className="iconPanel">
          <Link href="https://github.com/WhimsicalWill/" target="_blank">
            <GitHubIcon className="socialIcon"/>
          </Link>
          <Link href="https://twitter.com/whimsicalsquill" target="_blank">
            <TwitterIcon className="socialIcon"/>
          </Link>
          <Link href="https://www.linkedin.com/in/william-knipe-3379a9173/" target="_blank">
            <LinkedInIcon className="socialIcon"/>
          </Link>
        </div>
      </div> 
      <div className="right">
        <div className="imgContainer">
          <div className="wrapper">
            <h2>Hi, I'm</h2>
            <h1>Will Knipe</h1>
            <h3>I'm <span ref={textRef}></span></h3>
          </div>  
          <div className="bioContainer">
            <p>I am passionate about programming intelligent
              machines that learn by building models,
              generating novel data, and exploring
              in unsupervised settings. I am currently
              a senior at the University of Pittsburgh 
              studying Math and CS, with an interest in curriculum
              learning in <a href="https://en.wikipedia.org/wiki/Deep_reinforcement_learning">Deep RL</a>.
            </p>
          </div>
          <div className="buttonContainer">
            <ThemeProvider theme={theme}>
              <Button variant="outlined" className="main-button" href="#projects" size="large" color="primary">PROJECTS</Button>
              <Button variant="outlined" className="main-button" href="#research" size="large" color="primary">RESEARCH</Button>
              <Button variant="outlined" className="main-button" href="#resources" size="large" color="primary">RESOURCES</Button>
            </ThemeProvider>
          </div>
        </div>
      </div> 
    </div>
  )
}
