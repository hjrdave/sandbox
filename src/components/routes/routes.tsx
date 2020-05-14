import React, { Suspense } from "react";
import {Route, Switch} from 'react-router-treble';
import {lazyImport} from 'treble-fetch';

//dynamic imports
const TrebleGSM = lazyImport(() => import('../scenes/treble-gsm'));
const TrebleClassScene = lazyImport(() => import('../scenes/treble-gsm-class'));
const UseFetch = lazyImport(() => import('../scenes/use-fetch'));
const WPPosts = lazyImport(() => import('../scenes/wp-posts'));
const WPTemplate = lazyImport(() => import('../scenes/wp-template'));

function Routes() {

  return (
      <Switch lazy>
           <Route path='/' exact component={TrebleGSM}/>
           <Route path='/treble-gsm' exact component={TrebleGSM}/>
           <Route path='/treble-class' exact component={TrebleClassScene}/>
           <Route path='/use-fetch' exact component={UseFetch}/>
           <Route path='/posts' exact component={WPPosts}/>
           <Route path='/posts/:slug' exact component={WPTemplate}/>  
      </Switch>
  );
}

export default Routes;
