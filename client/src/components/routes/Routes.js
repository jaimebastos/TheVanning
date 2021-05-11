
import { Switch, Route } from 'react-router-dom'
import Extras from '../pages/Extras/Extras'


const Routes = () => {

    return (
      <Switch>
        <Route path="/extras"  render={() => <Extras />} />
      </Switch>
    );
}

export default Routes