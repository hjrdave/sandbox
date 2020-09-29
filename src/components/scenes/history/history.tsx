import React from 'react';
import SceneContainer, { ContentColumn, ContentRow } from '../../app-ui/scene-container';
import ContentPanel from '../../app-ui/content-panel';
import {useTreble} from 'treble-gsm';

function History() {
    const [{ sport, textColor, list, listTest2, listTest3 }] = useTreble();
    //const [{fruit}, dispatch2] = useTrebleHistory();

    // React.useEffect(() => {
    //     console.log(fruit);
    // },[fruit]);

    return (
        <>
            <SceneContainer>
                <ContentColumn>
                    <ContentRow>
                        <div className='col-12'>
                            <h3>History</h3>
                        </div>
                        <ContentPanel>
                           
                        </ContentPanel>
                    </ContentRow>
                </ContentColumn>
            </SceneContainer>
        </>
    )
}

export default History;