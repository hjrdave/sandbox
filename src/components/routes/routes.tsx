import React from "react";
import {Route} from "react-router-dom";
import {Switch} from '../utilities';
import {useTreble} from 'treble-gsm';
import {TrebleRoute, trebleImport} from 'treble-fetch';

//dynamic imports
const TrebleGSM = trebleImport(() => import('../scenes/treble-gsm'));
const TrebleClassScene = trebleImport(() => import('../scenes/treble-gsm-class'));
const UseFetch = trebleImport(() => import('../scenes/use-fetch'));
const WPTemplate = trebleImport(() => import('../scenes/wp-template'));

const routes = [
  { path: "/", exact: true, component: TrebleGSM},
  { path: "/treble-gsm", exact: true, component: TrebleGSM },
  { path: "/treble-class", exact: true, component: TrebleClassScene },
  { path: "/use-fetch", exact: true, component: UseFetch },
  { path: "/:slug", exact: true, component: WPTemplate }
]

function Routes() {

  const [{globalCache}] = useTreble();

  React.useEffect(() => {
    console.log(globalCache);
  },[globalCache]);

  return (
    <TrebleRoute routes={routes}>
      <Switch>
        {/**Dashboard */}
        {
          routes.map(route => (
            <Route exact key={route.path} path={route.path} component={route.component}/> 
          ))
        }
      </Switch>
  </TrebleRoute>
  );
}

export default Routes;
