import React from 'react';
// import './App.css';
import './styles/App.scss';
import NavBar from './components/NavBar';
import Landing from './components/Landing';
import Section from './components/Section';

const App: React.FC = () => {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Section backgroundImage="./images/background0.png">
        <Landing></Landing>
      </Section>

      <div className="content-container">
        
      </div>

    </div>
  );
}

export default App;
