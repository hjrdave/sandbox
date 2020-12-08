import React, { Component } from 'react';
import SceneContainer, { ContentColumn, ContentRow } from '../../app-ui/scene-container';
import ContentPanel from '../../app-ui/content-panel';
import { updateStore, withTreble } from 'treble-gsm';

class TrebleGSMClass extends Component {
    componentWillMount() {

    }

    render() {
        const [{ fruit, sport, car }, Store] = this.props.getTreble;
        return (
            <>
                <SceneContainer>
                    <ContentColumn>
                        <ContentRow>
                            <div className='col-12'>
                                <h3>Treble-Class</h3>
                            </div>
                            <ContentPanel>
                                <p>{fruit}</p>
                                <p>{sport}</p>
                                <p>{car}</p>
                                <button onClick={() => Store.update('updateFruit', 'Cherry', { disableMiddleware: false })}>Click Fruit</button>
                                <button onClick={() => Store.update('updateSport', 'FooSport')}>Click Sport</button>
                                <button onClick={() => Store.update('updateCar', 'FooCar')}>Click Car</button>
                                <button onClick={() => Store.reset('updateCar')}>Reset Car</button>
                                <button onClick={() => Store.resetAll()}>Reset Car</button>
                            </ContentPanel>
                        </ContentRow>
                    </ContentColumn>
                </SceneContainer>
            </>
        )
    }
}

const TrebleClassScene = withTreble(TrebleGSMClass);
export default TrebleClassScene;