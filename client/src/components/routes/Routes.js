import Vans from '../pages/Vans/Vans'
import { Switch, Route } from 'react-router-dom'
import VanDetails from '../pages/VanDetails/VanDetails'
import NewVan from '../pages/NewVan/NewVan'
import EditVan from '../pages/EditVan/EditVan'
import Extras from '../pages/Extras/Extras'
import NewExtra from '../pages/NewExtra/NewExtra';
import Login from '../pages/Login/Login'
import Signup from '../pages/Signup/Signup'
import FilteredExtras from '../pages/ExtrasFilter/ExtrasFilter'
import QuoteCard from '../pages/Quote/QuoteBaseCard'



const Routes = ({ storeUser, loggedUser }) => {
    return (
        <Switch>
            <Route path="/" exact render={() => <Vans />} />
            <Route path="/vans" exact render={() => <Vans />} />
            <Route path="/vans/details/:id" render={props => <VanDetails {...props} />} />
            <Route path="/vans/create" render={props => <NewVan history={props.history} />} />
            <Route path="/vans/edit/:vans_id" render={props => <EditVan {...props} history={props.history} />} />
            <Route path="/auth/signup" render={props => <Signup history={props.history} />} />
            <Route path="/auth/login" render={props => <Login storeUser={storeUser} history={props.history} />} />
            <Route path="/quote/create" render={() => <QuoteCard loggedUser={loggedUser} />} />
            <Route path="/extras/:category" render={(props) => <FilteredExtras {...props} />} />
            <Route path="/extras/create" render={(props) => <NewExtra history={props.history} />} />
            <Route path="/extras" exact render={() => <Extras />} />
        </Switch>)
}

export default Routes