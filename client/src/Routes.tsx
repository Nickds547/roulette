
import * as pages from './Pages/pages';
import {Route, Switch} from 'react-router-dom'

const Routes = () => (
    <Switch>
        <Route exact path="/" component={pages.HomePage}/>
        <Route exact path="/voting" component={pages.VotingPage}/>

        <Route component={pages.HomePage}/>
    </Switch>
);

export default Routes;