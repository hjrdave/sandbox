import React from 'react';
import { Button } from 'react-bootstrap';
import SceneContainer, { ContentColumn, ContentRow } from '../../app-ui/scene-container';
import ContentPanel from '../../app-ui/content-panel';
import { useStore } from '../../../Store';

function TestDispatchers() {

    const [{ fruit, darkMode }, Store, Utils] = useStore();

    React.useEffect(() => {
        console.log(Utils.reducerActions);
    }, []);

    return (
        <>

            <SceneContainer>
                <ContentColumn>
                    <ContentRow>
                        <div className='col-12'>
                            <h3>Test Dispatchers</h3>
                        </div>
                        <ContentPanel>
                            <h5 className=''>Fruit: {fruit}</h5>
                            <h5 className='pb-4'>toggle: {darkMode?.toString()}</h5>
                            <Button
                                onClick={() => Store.dispatch({
                                    type: Utils.actions.updateFruit,
                                    [Utils.actions.updateFruit]: 'Blueberry',
                                    reducerAction: Utils.reducerActions.update
                                })}
                            >
                                Dispatch
                            </Button>
                            <Button onClick={() => Store.update(Utils.actions.updateFruit, 'Fooberry')}>Update</Button>
                            <Button onClick={() => Store.toggle(Utils.actions.toggleDarkMode)}>Toggle</Button>
                            <Button onClick={() => Store.run(Utils.actions.runStoreSideEffect)}>Run</Button>
                            <Button onClick={() => Store.reset(Utils.actions.updateFruit)}>Reset</Button>
                            <Button onClick={() => Store.resetAll()}>Reset All</Button>
                        </ContentPanel>
                    </ContentRow>
                </ContentColumn>
            </SceneContainer>
        </>
    )
}

export default TestDispatchers;