import Vans from '../pages/Vans/Vans'
import { Switch, Route } from 'react-router-dom'
import VanDetails from '../pages/VanDetails/VanDetails'
import NewVan from '../pages/NewVan/NewVan'
import EditVan from '../pages/EditVan/EditVan'
import Extras from '../pages/Extras/Extras'
import ExtrasDetails from '../pages/ExtrasDetails/ExtrasDetails';
import NewExtra from '../pages/NewExtra/NewExtra';
import Login from '../pages/Login/Login'
import Signup from '../pages/Signup/Signup'



const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact render={() => <Vans />} />
            <Route path="/vans" exact render={() => <Vans />} />
            <Route path="/vans/details/:id" render={props => <VanDetails {...props} />} />
            <Route path="/vans/create" render={() => <NewVan />} />
            <Route path="/vans/edit/:vans_id" render={props => <EditVan {...props} history={props.history} />} />
            <Route path="/extras" exact render={() => <Extras />} />
            <Route path="/extras/create" render={(props) => <NewExtra history={props.history} />} />
            <Route path="/auth/signup" render={props => <Signup history={props.history} />} />
            <Route path="/auth/login" render={props => <Login history={props.history} />} />
        </Switch>
    )
}

export default Routes