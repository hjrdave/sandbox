
/*
    treble.js
    provides global state that needs to be acssessible to entire app
*/

import {createContext} from 'react';


//Global App Context

let defaultValue = [];
const Context = createContext(defaultValue);

export default Context;