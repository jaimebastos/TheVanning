
import { Switch, Route, Redirect } from 'react-router-dom'
import Login from '../pages/Login/Login'
import Signup from '../pages/Signup/Signup'

const Routes = ({ storeUser }) => {
    <Switch>

        <Route path="/auth/signup" render={props => <Signup history={props.history} />} />
        <Route path="/auth/login" render={props => <Login storeUser={storeUser} history={props.history} />} />

    </Switch>
}

export default Routes