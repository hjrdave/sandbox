import React, {useEffect} from 'react';
import SceneContainer, {ContentColumn, ContentRow} from '../../app-ui/scene-container';
import ContentPanel from '../../app-ui/content-panel';
import { useTreble, updateStore } from 'treble-gsm';

function TrebleGSM(){
    const [{ fruit, sport, subscribeID }, dispatch] = useTreble();
    // useEffect(() => {
    //     console.log(subscribeID)
    // },[subscribeID])
    return(
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
                           <button onClick={() => updateStore('updateFruit', 'Peach', dispatch)}>Click Fruit</button>
                           <button onClick={() => updateStore('updateSport', 'Football', dispatch)}>Click Sport</button>
                        </ContentPanel>
                    </ContentRow>
                </ContentColumn>
            </SceneContainer>
        </>
    )
}

export default TrebleGSM;