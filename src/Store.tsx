import {createStore} from 'treble-gsm';
import {TrebleFetchStore} from 'treble-fetch';

const Store = createStore([
    {
        action: 'updateTextColor',
         state: {
             textColor: true
         },
         features: {
             //persist: true
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
    },
    {
        action: 'updateAPIData',
        state: {
            apiData: []
        },
        features: {
           //call: () => alert('render')
         //  persist: true
        }
    },
    {
        action: 'listTest',
        state: {
            list: []
        },
        features:{
            // convert: (value) => {
            //     return {title: `Dave ${value.title}`, lede: `Dave ${value.lede}`}
            // }
        }
    }

],{
    extendStore: [
        TrebleFetchStore
    ]
});

export default Store;

