import React, {useEffect} from 'react';
import SceneContainer, {ContentColumn, ContentRow} from '../../app-ui/scene-container';
import ContentPanel from '../../app-ui/content-panel';
import ScopedComp from '../../app-ui/scoped-comp';
import uniqid from 'uniqid';
import { useFetch } from 'treble-gsm';

function WPTemplate({match}){
    // const {response: postData, loading, error} = useFetch(`http://play.mediafish.io/wordpress/wp-json/wp/v2/posts?slug=${match.params.slug}`,{
    //     default: true,
    //     trigger: match.params
    // });
    return(
        <>
            <SceneContainer>
                <ContentColumn>
                    <ContentRow>
                        {/* {
                            (loading && postData.length === 0) ?
                            <h3>Loading...</h3> :
                            <>
                                <div className='col-12'>
                                    <h3>{postData[0]?.title?.rendered}</h3>
                                </div>
                                <ContentPanel>
                                    <div dangerouslySetInnerHTML={ { __html: postData[0]?.content?.rendered } }></div>
                                </ContentPanel>
                            </>
                        } */}
                    </ContentRow>
                </ContentColumn>
            </SceneContainer>
        </>
    )
}

export default WPTemplate;