import React from 'react';
// import Typist from 'react-typist';
// import './App.css';
import './styles/App.scss';
import NavBar from './components/NavBar';
import Landing from './components/Landing';
import ParallaxSection from './components/ParallaxSection';
import Section from './components/Section';
import CardContainer from './components/CardContainer';
// import Card from './components/Card';
// import ParallaxElement from './components/ParallaxElement';
import ProjectCard from './components/ProjectCard';
import AboutPage from './components/AboutPage'
import SkillsPage from './components/SkillsPage';
import ProjectPage from './components/transitions/ProjectPage';

const App: React.FC = () => {
  return (
    <div className="App">
      <NavBar></NavBar>
      {/* https://raw.githubusercontent.com/ngwattcos/Corporeal/master/screenshots/main_menu.png */}
      <ParallaxSection backgroundImage="https://raw.githubusercontent.com/ngwattcos/portfolio-images/master/images/background0.png">
        {/* <ParallaxElement width="auto" left="55%" top="25%"> */}
          {/* <a className="link-unformatted" href="">What is this?</a> */}
        {/* </ParallaxElement> */}
        <Landing paddingTop="60vh" paddingBottom="30vh"></Landing>
      </ParallaxSection>

      <Section title="whoami" id="about" minHeight="60vh" padding="50px">
        {/* <span className="blinking-cursor">|</span> */}
        <AboutPage></AboutPage>
      </Section>

      <ParallaxSection backgroundImage="https://raw.githubusercontent.com/ngwattcos/portfolio-images/master/images/background3.png" minHeight="70vh" contain={true}>

      </ParallaxSection>

      <Section title="" id="skills" minHeight="60vh">
        <SkillsPage></SkillsPage>
      </Section>

      <Section title="experience" id="experience" minHeight="30vh" padding="0px">

      </Section>

      <Section title="projects" id="projects" minHeight="30vh" padding="0px">
        <ProjectPage></ProjectPage>

      </Section>

      <Section title="experiments" id="experiments" minHeight="30vh" padding="0px">

      </Section>

      <div className="content-container">

      </div>
      

    </div>
  );
}

export default App;
