import React from 'react';
import SceneContainer, {ContentColumn, ContentRow} from '../../app-ui/scene-container';
import ContentPanel from '../../app-ui/content-panel';
import { useFetch, useTreble } from 'treble-fetch';
import './_wp-template.scss';
import {matchPath} from 'react-router-dom';

//console.log(window.location);

function WPTemplate({trebleFetch, match}){

    const {response: postData, loading, error} = useFetch(`http://play.mediafish.io/wordpress/wp-json/better-rest-endpoints/v1/post/${match.params.slug}`,{
        cacheRes: false
    });

    return(
        <>
            <SceneContainer>
                <ContentColumn>
                    <ContentRow>
                        {
                            (loading) ?
                            <h3>Loading...</h3> :
                            <>
                                <div className='col-12'>
                                    <h3>{postData?.data?.title}</h3>
                                </div>
                                <ContentPanel>
                                    <div dangerouslySetInnerHTML={ { __html: postData?.data?.content} }></div>
                                </ContentPanel>
                            </>
                        }
                    </ContentRow>
                </ContentColumn>
            </SceneContainer>
        </>
    )
}

export default WPTemplate;