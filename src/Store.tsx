import {createStore} from 'treble-gsm';

const Store = createStore([
    {
        action: 'updateTextColor',
         state: {
             textColor: 'true'
         },
         features: {
             persist: true
         }
     },
    {
       action: 'updateCar',
        state: {
            car: 'bmw'
        }
    },
    {
        action: 'updateFruit',
        state: {
            fruit: 'apple',
        },
        features:{
        }
    },
    
    {
        action: 'updateSport',
        state: {
            sport: 'baseball'
        }
    },
    {
        action: 'updateAge',
        state: {
            age: 50
        }
    }

]);

export default Store;

