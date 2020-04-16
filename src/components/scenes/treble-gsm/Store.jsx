import {createStore, useScopedTreble} from 'treble-gsm';

const scopedContext = useScopedTreble();

const Store = createStore([
 
    {
       action: 'updateScopedExample',
        state: {
            scopedExample: 'Foo'
        }
    }
],{
    context: scopedContext
});

export default Store;

