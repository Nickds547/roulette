import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';

import { NavbarComponent } from './components';
import MainRouter from './router/app.routes';

function App() {
  return (
    <>
      <NavbarComponent/>
      <div className="page-container">
        <Router>
          <MainRouter />
        </Router>
      </div>
    </>
  );
}

export default App;
