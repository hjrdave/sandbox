import React from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import SceneContainer, { ContentColumn, ContentRow } from '../../app-ui/scene-container';
import ContentPanel from '../../app-ui/content-panel';
import uniqid from 'uniqid';
import { useTreble } from 'treble-gsm';
//import { useWorker } from "@koale/useworker";
import { TStore } from '../../../Store';

const fooBar = () => {
    let i = 0;
    while (i < 50000) {
        console.log('running test');
        i++;
    }
};


function TrebleGSM() {

    const [{ list, listTest2 }, Store, Utils] = useTreble();
    const { actions, actionKeys, stateKeys, storeData } = Utils;
    const StoreItems = useTreble()[0];

    const [history, setHistory] = React.useState({});

    // React.useEffect(() => {
    //     if (list) {
    //         let previousState = storeData[6].state.list;
    //         let hash = Object.keys(history).length;
    //         setHistory({
    //             ...history,
    //             [hash]: StoreItems
    //         });


    //     }

    // }, [list]);

    // React.useEffect(() => {
    //     Store.update('addSubcribeAPIToMiddleware', 'foo');
    // }, []);

    React.useEffect(() => {
        // (Store as any).updateFoo('stringFoo', 'mooto')
    }, [])

    React.useEffect(() => {

        //console.log(listTest2);


    }, [listTest2])


    return (
        <>
            <SceneContainer>
                <ContentColumn>
                    <ContentRow>
                        <div className='col-12'>
                            <h3>Treble-GSM</h3>
                        </div>
                        <ContentPanel>
                            <div className='row d-flex justify-content-between'>

                                <div className='col-6'>
                                    <h3 className='mb-4'>List Management (Object Array)</h3>
                                    <button onClick={() => {
                                        if (list) {
                                            Store.update((actions as any).listTest,
                                                [...list, {
                                                    level: uniqid(),
                                                    title: 'Billy Fo',
                                                    lede: 'Yo Bro Mo So Fo'
                                                }],
                                            )

                                        }
                                    }}>Add Card</button>
                                    <button onClick={() => Store.reset((actions as any).listTest)}>Reset</button>
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