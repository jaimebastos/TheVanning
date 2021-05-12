
import { Switch, Route } from 'react-router-dom'
import Extras from '../pages/Extras/Extras'
import ExtrasDetails from '../pages/ExtrasDetails/ExtrasDetails';
import NewExtra from '../pages/NewExtra/NewExtra';


const Routes = () => {

  return (
    <Switch>
      <Route path="/extras" exact render={() => <Extras />} />
      <Route path="/extras/create" render={() => <NewExtra />} />
    </Switch>
  );
}

export default Routes