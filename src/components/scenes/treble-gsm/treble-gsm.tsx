import React from 'react';
import SceneContainer, {ContentColumn, ContentRow} from '../../app-ui/scene-container';
import ContentPanel from '../../app-ui/content-panel';

function TrebleGSM(){
  
    return(
        <>
            <SceneContainer>
                <ContentColumn>
                    <ContentRow>
                        <div className='col-12'>
                            <h3>Treble-GSM</h3>
                        </div>
                        <ContentPanel>
                           <p>foo</p>
                        </ContentPanel>
                    </ContentRow>
                </ContentColumn>
            </SceneContainer>
        </>
    )
}

export default TrebleGSM;