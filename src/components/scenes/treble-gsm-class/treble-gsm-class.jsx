import React, {Component} from 'react';
import SceneContainer, {ContentColumn, ContentRow} from '../../app-ui/scene-container';
import ContentPanel from '../../app-ui/content-panel';
import { updateStore, withTreble } from 'treble-gsm';

class TrebleGSMClass extends Component{
   componentWillMount(){
    
   }
    
   render(){
       const [{fruit, sport, car}, dispatch] = this.props.getTreble;
       return(
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
                        <button onClick={() => updateStore('updateFruit', 'Cherry', dispatch)}>Click Fruit</button>
                        <button onClick={() => updateStore('updateSport', 'FooSport', dispatch)}>Click Sport</button>
                        <button onClick={() => updateStore('updateCar', 'FooCar', dispatch)}>Click Car</button>
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