import {createStore} from 'treble-gsm';

const Store = createStore([

    {
        action: 'updateFruit',
        state: {
            fruit: 'apple'
        },
        features: {
           persist: true,
           call: (state) => alert(state),
           check: (state) => {
               if(state === 'Peach'){
                   return true;
               }
           },
           convert: (state) => {
            return `${state} Juice`;
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
            persist: true,
            call: () => alert('calling sport')
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

