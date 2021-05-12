import Vans from '../pages/Vans/Vans'
import { Switch, Route} from 'react-router-dom'
import VanDetails from '../pages/VanDetails/VanDetails'
import NewVan from '../pages/NewVan/NewVan'
import EditVan from '../pages/EditVan/EditVan'
// import { render } from 'react-dom'
// import Login from '../pages/Login/Login'
// import Signup from '../pages/Signup/Signup'

const Routes = () => {
    return(
        <Switch>
            <Route path="/" exact render={() => <Vans />} />
            <Route path="/vans" exact render={() => <Vans />} />
            <Route path="/vans/details/:id" render={props => <VanDetails {...props} />} />  
            <Route path="/vans/create" render={() => <NewVan />} /> 
            <Route path="/vans/edit/:vans_id" render={props => <EditVan {...props} />} /> 
      </Switch>
    )
}

export default Routes