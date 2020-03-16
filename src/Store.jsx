import {createStore} from 'treble-gsm';

const Store = createStore([

    {
        action: 'updateFruit',
        state: {
            fruit: 'apple'
        },
        features: {
           convert: (state) => {
            return state + ' Juice';
           }
        }
    },
    {
        action: 'updateCar',
        state: {
            car: 'bmw'
        }
    },
    {
        action: 'updateSport',
        state: {
            sport: 'baseball'
        },
        features: {
           // call: () => alert('calling sport')
        }
    },
    {
        action: 'updateAge',
        state: {
            age: 50
        }
    }

],);

export default Store;

