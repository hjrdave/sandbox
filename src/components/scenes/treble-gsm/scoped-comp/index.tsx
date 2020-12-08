import React from 'react';
import { withTreble, useTreble } from 'treble-gsm';
import { useStore } from '../../../../Store';
import { Store, useScopedStore } from './Store';

function ScopedComp() {

    const [{ trebleCoreData }, AppStore, AppUtil] = useTreble();
    const [{ scopedFoo, trebleCoreData: scopedTrebleCoreData }, ScopedStore, ScopedUtil] = useScopedStore();

    React.useEffect(() => {
        ScopedStore.run('updateScopedFoo');
    }, [])

    return (
        <>

        </>
    )
}

const ScopedComponent = withTreble(ScopedComp, { store: Store });
export default ScopedComponent;