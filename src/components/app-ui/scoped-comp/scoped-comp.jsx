import React, {useEffect} from 'react';
import {withTreble, updateStore} from 'treble-gsm';
import {Store, useScopedCompTreble} from './Store';
import ListOne from './list-one';
import ListTwo from './list-two';

export function ScopedCompContainer({listOneItems, listTwoItems}){

    const [{}, Store] = useScopedCompTreble();
    //put props into Store
    useEffect(() => {
        Store.update('updateListOne', listOneItems);
        Store.update('updateListTwo', listTwoItems);
    },[]);

    return(
        <>
            <h5>Scoped Component</h5>
            <ListOne/>
            <ListTwo/>
        </>
    )
}

const ScopedComp = withTreble(ScopedCompContainer, {store: Store});
export default ScopedComp;