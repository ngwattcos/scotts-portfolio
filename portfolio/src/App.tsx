import React from 'react';
// import './App.css';
import './styles/App.scss';
import NavBar from './components/NavBar';
import Landing from './components/Landing';

const App: React.FC = () => {
  return (
    <div className="App">
      <NavBar></NavBar>

      <Landing></Landing>

      <div className="content-container">
        
      </div>

    </div>
  );
}

export default App;
