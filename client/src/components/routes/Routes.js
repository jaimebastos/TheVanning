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
import ProtectedRoute from './ProtectedRoute'
import MyProfile from '../pages/MyProfile/MyProfile'




const Routes = ({ storeUser, loggedUser, handleAlert }) => {
  return (
    <Switch>
      <Route path="/" exact render={() => <LandingPage />} />
      <Route path="/vans" exact render={() => <Vans loggedUser={loggedUser} />} />
      <Route path="/vans/details/:id" render={(props) => <VanDetails {...props} />} />
      <ProtectedRoute
        path="/vans/create"
        condition={loggedUser && loggedUser.role === "ADMIN"}
        component={(props) => <NewVan history={props.history} />}
      />
      <ProtectedRoute
        path="/vans/edit/:vans_id"
        condition={loggedUser && loggedUser.role === "ADMIN"}
        component={(props) => <EditVan {...props} history={props.history} />}
      />
      <Route path="/auth/signup" render={(props) => <Signup history={props.history} handleAlert={handleAlert} />} />
      <Route path="/extras" exact render={() => <Extras loggedUser={loggedUser} />} />
      <ProtectedRoute
        path="/extras/create"
        condition={loggedUser && loggedUser.role === "ADMIN"}
        component={(props) => <NewExtra history={props.history} handleAlert={handleAlert} />}
      />
      <Route path="/auth/login" render={(props) => <Login storeUser={storeUser} history={props.history} handleAlert={handleAlert} />} />
      <Route path="/quote" exact render={() => <QuotePage loggedUser={loggedUser} />} />
      <ProtectedRoute
        path="/quote/create"
        condition={loggedUser}
        component={(props) => <QuoteCard loggedUser={loggedUser} history={props.history} handleAlert={handleAlert} />}
      />
      <Route path="/extras/:category" render={(props) => <FilteredExtras {...props} />} />
      <ProtectedRoute
        path="/my-profile/:id"
        condition={loggedUser}
        component={(props) => <MyProfile loggedUser={loggedUser} handleAlert={handleAlert} {...props} />}
      />
    </Switch>
  );
}
export default Routes