
import { Switch, Route, Redirect } from 'react-router-dom'
import Login from '../pages/Login/Login'
import Signup from '../pages/Signup/Signup'

const Routes = ({ storeUser, loggedUser }) => {
    <Switch>
        <Route path="/" exact render={ /** Comp index */} />
        <Route path="/vans" exact render={ /** Comp listadp */} />
        <Route path="/vans/details/:id" render={ /** Comp list details */} />
        <Route path="/vans/create" render={ /** Comp vans create */} />
        <Route path="/vans/update/:id" render={ /** Comp vans update */} />

        Profile

        <Route path="/auth/login" render={ /** Comp vans update */} />
        <Route path="/auth/signup" render={ /** Comp vans update */} />

        <Route path="/extras/details/:id" render={ /** Comp list details */} />
        <Route path="/extras/create" render={ /** Comp vans create */} />
        <Route path="/extras/update/:id" render={ /** Comp vans update */} />

        <Route path="/quotes/details/:id" render={ /** Comp list details */} />
        <Route path="/quotes/create" render={ /** Comp vans create */} />
        <Route path="/quotes/update/:id" render={ /** Comp vans update */} />
    </Switch>
}

export default Routes