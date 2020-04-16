import React from "react";
import {Route} from "react-router-dom";
import {Switch} from '../utilities';

//scenes
import TrebleGSM from '../scenes/treble-gsm';
import TrebleClassScene from '../scenes/treble-gsm-class';

//groups


function Routes() {

  return (
    <Switch>
      {/**Dashboard */}
      <Route exact path={`/`} component={TrebleGSM}/> 
      <Route exact path={`/treble-gsm`} component={TrebleGSM}/> 
      <Route exact path={`/treble-class`} component={TrebleClassScene}/> 
    </Switch>
  );
}

export default Routes;
