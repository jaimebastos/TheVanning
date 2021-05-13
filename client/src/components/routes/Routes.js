
import { Switch, Route } from 'react-router-dom'
import Login from '../pages/Login/Login'
import Signup from '../pages/Signup/Signup'


const Routes = ({ }) => {
    return (
        <Switch>

            <Route path="/auth/signup" render={props => <Signup history={props.history} />} />
            <Route path="/auth/login" render={props => <Login history={props.history} />} />

        </Switch>
    )
}

export default Routes