import React from 'react';
import SceneContainer, { ContentColumn, ContentRow } from '../../app-ui/scene-container';
import DataGrid from '../../app-ui/data-grid';
import ContentPanel from '../../app-ui/content-panel';
import uniqid from 'uniqid';
import {useFetch, prefetch, TrebleLink as Link} from 'treble-fetch';

function UseFetch() {
   // const [{ fruit, sport, textColor, apiData }, dispatch] = useTreble();

    const {response: tableData, loading: loadingTableData, updating, error } = useFetch('https://jsonplaceholder.typicode.com/photos?_limit=1000',{
        cacheRes: false
    }); 

    return (
        <>
            <SceneContainer>
                <ContentColumn>
                    <ContentRow>
                        <div className='col-12 d-flex justify-content-between'>
                            <h3>useFetch Testing</h3>
                            <p>
                                {
                                    (error === null) ? 'Checking Connection...' :
                                    (error !== 200) ? 'Network Error' : 'Success'
                                }
                            </p>
                            <p>{(updating) ? 'Updating...' : 'Updated'}</p>
                        </div>
                      
                       <ContentPanel> 
                            <div className='d-flex justify-content-between'>
                                <p>Count: {tableData.data.length | 0}</p>
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
                                rowData={tableData.data}
                            />  
                        </ContentPanel>

                    </ContentRow>
                </ContentColumn>
            </SceneContainer>
        </>
    )
}

export default UseFetch;