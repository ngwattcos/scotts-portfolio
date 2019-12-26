import React from 'react';
// import './App.css';
import './styles/App.scss';
import NavBar from './components/NavBar';
import Landing from './components/Landing';
import ParallaxSection from './components/ParallaxSection';
import Section from './components/Section';
import CardContainer from './components/CardContainer';
import Card from './components/Card';

const App: React.FC = () => {
  return (
    <div className="App">
      <NavBar></NavBar>
      <ParallaxSection backgroundImage="./images/background0.png">
        <Landing paddingTop="55vh" paddingBottom="30vh"></Landing>
      </ParallaxSection>

      <Section title="whoami" id="about" minHeight="30vh" padding="50px">
        <CardContainer>
          <Card title="About">potato</Card>
          <Card title="About">potato</Card>
        </CardContainer>
      </Section>

      <Section title="experience" id="experience" minHeight="30vh" padding="0px">

      </Section>

      <div className="content-container">

      </div>
      

    </div>
  );
}

export default App;
