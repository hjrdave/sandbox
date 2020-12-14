import React from "react";
import { useTreble } from 'treble-gsm';
import { Route, Switch, useParams, useHistory } from 'react-router-treble';
import { lazyImport } from 'treble-fetch';

//dynamic imports
const TrebleGSM = lazyImport(() => import('../scenes/treble-gsm'));
const TrebleClassScene = lazyImport(() => import('../scenes/treble-gsm-class'));
const UseFetch = lazyImport(() => import('../scenes/use-fetch'));
const WPPosts = lazyImport(() => import('../scenes/wp-posts'));
const WPTemplate = lazyImport(() => import('../scenes/wp-template'));
const History = lazyImport(() => import('../scenes/history'));
const TestDispatchers = lazyImport(() => import('../scenes/test-dispatchers'));

function Routes() {


  const [{ }] = useTreble();

  //  React.useEffect(() => {
  //     console.log(history);
  // },[history]); 


  return (
    <Switch>
      <Route path='/' exact>
        <TrebleGSM />
      </Route>
      <Route path='/treble-gsm' exact>
        <TrebleGSM />
      </Route>
      <Route path='/treble-class' exact>
        <TrebleClassScene />
      </Route>
      <Route path='/use-fetch' exact>
        <UseFetch />
      </Route>
      <Route path='/posts' exact>
        <WPPosts />
      </Route>
      <Route path='/posts/:slug'>
        <WPTemplate />
      </Route>
      <Route path='/history' exact>
        <History />
      </Route>
      <Route path='/test-dispatchers' exact>
        <TestDispatchers />
      </Route>
    </Switch>
  );
}

export default Routes;
