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
import LandingPage from '../pages/LandingPage/LandingPage'
import QuotePage from '../pages/Quote/QuotepageDesign/QuotePage'




const Routes = ({ storeUser, loggedUser, handleAlert }) => {
    return (
      <Switch>
        <Route path="/" exact render={() => <LandingPage />} />
        <Route path="/vans" exact render={() => <Vans />} />
        <Route path="/vans/details/:id" render={(props) => <VanDetails {...props} />} />
        <Route path="/vans/create" render={(props) => <NewVan history={props.history} />} />
        <Route path="/vans/edit/:vans_id" render={(props) => <EditVan {...props} history={props.history} />} />
        <Route path="/auth/signup" render={(props) => <Signup history={props.history} handleAlert={handleAlert} />} />
        <Route path="/extras" exact render={() => <Extras />} />
        <Route
          path="/extras/create"
          render={(props) => <NewExtra history={props.history} loggedUser={loggedUser} handleAlert={handleAlert} />}
        />
        <Route path="/auth/login" render={(props) => <Login storeUser={storeUser} history={props.history} handleAlert={handleAlert} />} />
        <Route path="/quote" extact render={() => <QuotePage />} />
        <Route path="/quote/create" render={() => <QuoteCard loggedUser={loggedUser} />} />
        <Route path="/extras/:category" render={(props) => <FilteredExtras {...props} />} />
      </Switch>
    );
}

export default Routes