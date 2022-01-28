import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from './Routes';
import './App.css';

import { NavbarComponent } from './components';

function App() {
  return (
   
    <div className="page-container">
      <NavbarComponent/>
      <Router>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
