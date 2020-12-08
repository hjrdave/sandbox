import React from 'react';
import SceneContainer, { ContentColumn, ContentRow } from '../../app-ui/scene-container';
import ContentPanel from '../../app-ui/content-panel';
import { useStore } from '../../../Store';

function History() {
    const [{ sport, textColor, list, listTest2 }, Store, Util] = useStore();
    const StoreItems = useStore()[0]
    //const [{fruit}, dispatch2] = useTrebleHistory()
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