import React from 'react';
import SceneContainer, { ContentColumn, ContentRow } from '../../app-ui/scene-container';
import DataGrid from '../../app-ui/data-grid';
import ContentPanel from '../../app-ui/content-panel';
import uniqid from 'uniqid';
// import { useTreble} from 'treble-gsm';
import {useFetch, prefetch} from 'treble-fetch';



prefetch('http://play.mediafish.io/wordpress/wp-json/wp/v2/posts');
prefetch('https://jsonplaceholder.typicode.com/photos/?_limit=300');

function UseFetch() {
   // const [{ fruit, sport, textColor, apiData }, dispatch] = useTreble();

    const { response: wpPosts, loading } = useFetch('http://play.mediafish.io/wordpress/wp-json/wp/v2/posts', {
       default: []
    }); 

   

    const { response: tableData, loading: loadingTableData } = useFetch('https://jsonplaceholder.typicode.com/photos/?_limit=300', {
        default: []
    });

    // React.useEffect(() => {
    //     console.log(wpPosts)
    // },[wpPosts])

    return (
        <>
            <SceneContainer>
                <ContentColumn>
                    <ContentRow>
                        <div className='col-12'>
                            <h3>useFetch Testing</h3>
                        </div>
                        {

                            // (loading || wpPosts.length === 0) ?
                            //     <div className='col-12 pt-4 mt-4'>
                            //         <h2>Loading...</h2>
                            //     </div> :
                                wpPosts.map(({ title, excerpt }) => {
                                    return (
                                        <React.Fragment key={uniqid()}>
                                            <ContentPanel>
                                                <h5>{title.rendered}</h5>
                                                <div dangerouslySetInnerHTML={{ __html: excerpt.rendered }}></div>
                                            </ContentPanel>
                                        </React.Fragment>
                                    )
                                })
                        }
                       <ContentPanel>
                            <div className='d-flex justify-content-between'>
                                <p>Count: {tableData.length | 0}</p>
                                <p>{(loadingTableData) ? 'updating...' : null}</p>
                            </div>
                            <DataGrid
                                columns={[
                                    { name: 'albumID', dataField: 'albumID' },
                                    { name: 'id', dataField: 'id' },
                                    { name: 'title', dataField: 'title' },
                                    { name: 'url', dataField: 'url' },
                                    { name: 'thumbnailUrl', dataField: 'thumbnailUrl' }
                                ]}
                                rowData={tableData}
                            />
                        </ContentPanel>

                    </ContentRow>
                </ContentColumn>
            </SceneContainer>
        </>
    )
}

export default UseFetch;