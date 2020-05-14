import React from 'react';
import SceneContainer, { ContentColumn, ContentRow } from '../../app-ui/scene-container';
import DataGrid from '../../app-ui/data-grid';
import {Link} from 'react-router-treble';
import ContentPanel from '../../app-ui/content-panel';
import uniqid from 'uniqid';
import {useFetch, prefetch} from 'treble-fetch';

function WPPosts() {
   // const [{ fruit, sport, textColor, apiData }, dispatch] = useTreble();

    const {response: wpPosts, loading, updating, error } = useFetch('http://play.mediafish.io/wordpress/wp-json/better-rest-endpoints/v1/posts',{
        cacheRes: false
    }); 

    return (
        <>
            <SceneContainer>
                <ContentColumn>
                    <ContentRow>
                        <div className='col-12 d-flex justify-content-between'>
                            <h3>Wordpress Posts</h3>
                            <p>
                                {
                                    (error === null) ? 'Checking Connection...' :
                                    (error !== 200) ? 'Network Error' : 'Success'
                                }
                            </p>
                            <p>{(updating) ? 'Updating...' : 'Updated'}</p>
                        </div>
                        {

                            (loading) ?
                                <div className='col-12 pt-4 mt-4'>
                                    <h2>Loading...</h2>
                                </div> :
                                wpPosts?.data?.map(({ title, excerpt, slug }) => {
                                    return (
                                        <React.Fragment key={uniqid()}>
                                            <ContentPanel>
                                                <h5>
                                                    <Link 
                                                        to={`posts/${slug}`}
                                                        prefetch={[`http://play.mediafish.io/wordpress/wp-json/better-rest-endpoints/v1/post/${slug}`]}
                                                        >
                                                        {title}
                                                    </Link>
                                                </h5>
                                                <div dangerouslySetInnerHTML={{ __html: excerpt }}></div>
                                            </ContentPanel>
                                        </React.Fragment>
                                    )
                                })
                        }

                    </ContentRow>
                </ContentColumn>
            </SceneContainer>
        </>
    )
}

export default WPPosts;