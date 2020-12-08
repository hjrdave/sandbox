import React from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import SceneContainer, { ContentColumn, ContentRow } from '../../app-ui/scene-container';
import ContentPanel from '../../app-ui/content-panel';
import uniqid from 'uniqid';
import { useTreble } from 'treble-gsm';
import { useStore } from '../../../Store';
import TrebleListManager from 'treble-list-manager';
import TrebleCore from 'treble-gsm/lib/treble-core/treble-core'
import ScopedComponent from './scoped-comp';
//import { useWorker } from "@koale/useworker";

const fooBar = () => {
    let i = 0;
    while (i < 50000) {
        console.log('running test');
        i++;
    }
};


function TrebleGSM() {

    const [{ list, listTest2, trebleCoreData }, Store, Utils] = useStore();
    const { actions, actionKeys, stateKeys, storeData } = Utils;


    const [history, setHistory] = React.useState({});


    React.useEffect(() => {

        // console.log(Store)
    }, [])


    return (
        <>
            <ScopedComponent />
            <SceneContainer>
                <ContentColumn>
                    <ContentRow>
                        <div className='col-12'>
                            <h3>Treble-GSM</h3>
                        </div>
                        <ContentPanel>
                            <div className='row d-flex justify-content-between'>

                                <div className='col-6'>
                                    <h3 className='mb-4'>List Management</h3>
                                    <button onClick={() => {
                                        if (list) {
                                            Store.append(actions.listTest,
                                                {
                                                    level: '12943',
                                                    title: 'Billy Fo',
                                                    lede: 'Yo Bro Mo So Fo'
                                                }
                                            )
                                        }
                                    }}>Add Card</button>
                                    {/* <button onClick={() => Store.update((actions as any).listTest, { key: 'foo', value: 'fee' })}>Add Card</button> */}
                                    <button onClick={() => Store.reset('fooToo')}>Reset</button>
                                    <button onClick={() => Store.run(Utils.actions.runStoreSideEffect)}>Run</button>
                                    <button onClick={() => Store.clearPersist('listTest')}>Clear Cache</button>
                                    {/* <button onClick={() => workerFn()}>Run Web Worker</button> */}
                                </div>
                                <div className='col-4'>
                                    <h5>List</h5>

                                    {
                                        list?.map((item: any) => {
                                            return (
                                                <React.Fragment key={uniqid()}>
                                                    <Card className='mt-2'>
                                                        <Card.Body>
                                                            <p style={{ color: 'black' }}>Level: {item.level}</p>
                                                            <h5 style={{ color: 'black' }}>{item.title}</h5>
                                                            <p style={{ color: 'black' }}>{item.lede}</p>
                                                            {/* <Button onClick={() => Store.remove('listTest', item)}>Remove</Button> */}
                                                        </Card.Body>
                                                    </Card>
                                                </React.Fragment>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </ContentPanel>
                    </ContentRow>
                </ContentColumn>
            </SceneContainer>
        </>
    )
}

export default TrebleGSM;