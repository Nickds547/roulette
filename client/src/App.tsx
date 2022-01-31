import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';

import { NavbarComponent } from './components';
import { useAppSelector } from './redux/hooks';
import MainRouter from './router/app.routes';

function App() {
  const userAccount = useAppSelector((state) => state.userAccountReducer.account)

  return (
    <>
      <NavbarComponent userAccount={userAccount}/>
      <div className="page-container">
        <Router>
          <MainRouter />
        </Router>
      </div>
    </>
  );
}

export default App;
