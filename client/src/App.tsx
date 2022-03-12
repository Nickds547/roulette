import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';

import { NavbarComponent } from './components';
import { useAppSelector } from './redux/hooks';
import MainRouter from './router/app.routes';

function App() {
  const userAccount = useAppSelector((state) => state.userAccountReducer.account)

  return (
    <>
    <Router>
      <NavbarComponent userAccount={userAccount}/>
      <div className="page-container">
          <MainRouter />
      </div>
    </Router>
    </>
  );
}

export default App;
