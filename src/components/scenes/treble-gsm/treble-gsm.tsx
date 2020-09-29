import React from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import SceneContainer, { ContentColumn, ContentRow } from '../../app-ui/scene-container';
import ContentPanel from '../../app-ui/content-panel';
import uniqid from 'uniqid';
import { useTreble, clearPersist, TUseTreble } from 'treble-gsm';
//import { useWorker } from "@koale/useworker";
import { IStore } from '../../../Store';

const fooBar = () => {
    let i = 0;
    while (i < 50000) {
        console.log('running test');
        i++;
    }
};


function TrebleGSM() {

    const [{ list }, Store]: TUseTreble<IStore> = useTreble();

    //const [workerFn, controller] = useWorker(fooBar);

    const StoreItems: IStore = useTreble()[0];
    const StoreFoo = useTreble()[1];

    // React.useEffect(() => {
    //     console.log(Store.getStateKeys());

    // },[])
    const fooBar2 = () => {
        let i = 0;
        while (i < 50000) {
            console.log('running test');
            i++;
        }
    };

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
                                    {/* <button onClick={() => Store.append('listTest',
                                        {
                                            level: uniqid(),
                                            title: 'Billy Bro',
                                            lede: 'Yo Bro Mo So Fo'
                                        },
                                    )}>Add Card</button> */}
                                    <button onClick={() => Store.reset('listTest')}>Reset</button>
                                    {/* <button onClick={() => workerFn()}>Run Web Worker</button> */}
                                </div>
                                <div className='col-4'>
                                    <h5>List</h5>

                                    {
                                        list?.map((item) => {
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