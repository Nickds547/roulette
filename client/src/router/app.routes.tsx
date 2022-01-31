
import * as pages from '../pages';
import {Route, Switch} from 'react-router-dom'

const MainRouter = () => (
    <Switch>
        <Route exact path="/" component={pages.HomePage}/>
        <Route exact path="/admin" component={pages.AdminPage}/>
        <Route component={pages.HomePage}/>

    </Switch>
);

export default MainRouter;