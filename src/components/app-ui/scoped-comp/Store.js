import { createStore, useScopedTreble, useTreble } from 'treble-gsm';

export const scopedContext = useScopedTreble();
export const useScopedCompTreble = () => useTreble(scopedContext);

export const Store = createStore([

    {
        action: 'updateListOne',
        state: {
            listOne: []
        }
    },
    {
        action: 'updateListTwo',
        state: {
            listTwo: []
        }
    }
],{ context: scopedContext });

export default Store;