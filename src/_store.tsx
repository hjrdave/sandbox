import {createStore} from 'treble-gsm';



const Store = createStore([

    {
        action: 'updateFruit',
        state: {
            fruit: 'apple'
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
        action: 'updateCar',
        state: {
            car: 'bmw'
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

],);

export default Store;

