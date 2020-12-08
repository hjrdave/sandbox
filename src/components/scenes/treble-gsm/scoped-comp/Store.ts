import { createStore, useScopedTreble, useTreble } from 'treble-gsm';
import TrebleListManager from 'treble-list-manager';

export const Context = useScopedTreble();
export const useScopedStore = () => useTreble(Context);

export const Store = createStore([
    {
        action: 'updateScopedFoo',
        state: {
            scopedFoo: 'foo'
        },
        features: {
            //run: (data) => console.log(data)
        }
    }
], {
    context: Context,
    //inheritModules: false,
    modules: [
        TrebleListManager
    ]
}); 
