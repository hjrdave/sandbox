import React from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import SceneContainer, { ContentColumn, ContentRow } from '../../app-ui/scene-container';
import ContentPanel from '../../app-ui/content-panel';
import uniqid from 'uniqid';
import { useTreble, updateStore, clearPersist } from 'treble-gsm';

function TrebleGSM() {
    const [{ fruit, sport, textColor, list }, dispatch] = useTreble();
    
    const handleSubmit = (event) => {
        let form = event.currentTarget;
        let submissionData = {
            id: uniqid(),
            title: form.elements['title'].value,
            lede: form.elements['lede'].value
        }
        event.preventDefault();
        event.stopPropagation();
        updateStore('listTest', submissionData, dispatch, {append: true });
        form.elements['title'].value = '';
        form.elements['lede'].value = '';
    }

    return (
        <>
            <SceneContainer>
                <ContentColumn>
                    <ContentRow>
                        <div className='col-12'>
                            <h3>Treble-GSM</h3>
                        </div>

                        <ContentPanel>
                            <p>{fruit}</p>
                            <p>{sport}</p>
                            <p className={`${(textColor) ? 'active' : ''}`}>Toggle Example: {textColor.toString()}</p>
                            <button onClick={() => updateStore('updateFruit', 'Peach', dispatch)}>Click Fruit</button>
                            <button onClick={() => updateStore('updateSport', 'Football', dispatch)}>Click Sport</button>
                            <button onClick={() => updateStore('updateTextColor', textColor, dispatch, { toggle: true })}>Toggle</button>
                            <button onClick={() => clearPersist('fruit')}>Clear LocalStorage</button>
                        </ContentPanel>
                        <ContentPanel>
                            <div className='row d-flex justify-content-between'>

                                <div className='col-6'>
                                    <Form onSubmit={handleSubmit}>
                                        <Form.Group controlId="formGroupTitle">
                                            <Form.Label>Title</Form.Label>
                                            <Form.Control name='title' placeholder="Enter Title" />
                                        </Form.Group>
                                        <Form.Group controlId="formGroupLede">
                                            <Form.Label>Lede</Form.Label>
                                            <Form.Control name='lede' as="textarea" rows="3" placeholder="Enter Lede..." />
                                        </Form.Group>
                                        <Button variant="primary" type='submit'>
                                            Submit
                                        </Button>
                                    </Form>
                                </div>
                                <div className='col-4'>
                                    <h5>List: {list.length}</h5>

                                    {
                                        list?.map((item) => {
                                            return (
                                                <React.Fragment key={uniqid()}>
                                                    <Card className='mt-2'>
                                                        <Card.Body>
                                                            <h5 style={{ color: 'black' }}>{item.title}</h5>
                                                            <p style={{ color: 'black' }}>{item.lede}</p>
                                                            <Button onClick={() => updateStore('listTest', item, dispatch, { remove: true })}>Remove</Button>
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