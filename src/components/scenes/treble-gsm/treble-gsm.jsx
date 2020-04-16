import React, {useEffect} from 'react';
import SceneContainer, {ContentColumn, ContentRow} from '../../app-ui/scene-container';
import ContentPanel from '../../app-ui/content-panel';
import ScopedComp from '../../app-ui/scoped-comp';
import { useTreble, updateStore, clearPersist } from 'treble-gsm';

function TrebleGSM(){
    const [{ fruit, sport, textColor }, dispatch] = useTreble();


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
                            <p className={`${(textColor) ? 'active' : ''}`}>Toggle Example: {textColor.toString()}</p>
                           <button onClick={() => updateStore('updateFruit', 'Peach', dispatch)}>Click Fruit</button>
                           <button onClick={() => updateStore('updateSport', 'Football', dispatch)}>Click Sport</button>
                           <button onClick={() => updateStore('updateTextColor', textColor, dispatch, {toggle: true})}>Toggle</button>
                           <button onClick={() => clearPersist('textColor')}>Clear LocalStorage</button>
                        </ContentPanel>
                        <ContentPanel>
                            <ScopedComp
                            listOneItems={[
                                'foo',
                                'fooTwo',
                                'fooThree',
                                'fooFour'
                            ]}
                            listTwoItems={[
                                'mew',
                                'mewTwo',
                                'mewThree'
                            ]}
                            />
                        </ContentPanel>
                    </ContentRow>
                </ContentColumn>
            </SceneContainer>
        </>
    )
}

export default TrebleGSM;