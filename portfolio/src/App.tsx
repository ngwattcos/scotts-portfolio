import React from 'react';
// import Typist from 'react-typist';
// import './App.css';
import './styles/App.scss';
import NavBar from './components/NavBar';
import Landing from './components/Landing';
import ParallaxSection from './components/ParallaxSection';
import Section from './components/Section';
import CardContainer from './components/CardContainer';
import Card from './components/Card';
import ParallaxElement from './components/ParallaxElement';
import ProjectCard from './ProjectCard';

const App: React.FC = () => {
  return (
    <div className="App">
      <NavBar></NavBar>
      <ParallaxSection backgroundImage="./images/background0.png">
        <ParallaxElement width="auto" left="55%" top="25%">
          <a className="link-unformatted" href="">What is this?</a>
        </ParallaxElement>
        <Landing paddingTop="60vh" paddingBottom="30vh"></Landing>
      </ParallaxSection>

      <Section title="whoami" id="about" minHeight="60vh" padding="50px">
        <span className="blinking-cursor">|</span>
      </Section>

      <Section title="skills" id="skills" minHeight="60vh">

      </Section>

      <Section title="experience" id="experience" backgroundGradient={1} minHeight="30vh" padding="0px">

      </Section>

      <Section title="projects" id="projects" backgroundGradient={1} minHeight="30vh" padding="0px">
        <CardContainer>
          <ProjectCard title="Corporeal">Corporeal</ProjectCard>
          <Card title="Thing 2">potato</Card>
          <Card title="Object 3">potato</Card>
        </CardContainer>

      </Section>

      <Section title="experiments" id="experiments" backgroundGradient={1} minHeight="30vh" padding="0px">

      </Section>

      <div className="content-container">

      </div>
      

    </div>
  );
}

export default App;
