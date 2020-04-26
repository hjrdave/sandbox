import React from 'react';
import {useDataGridTreble} from '../Store';

export default function Header(){

    const [{loadingState}] = useDataGridTreble();
    return(
        <>
            <div className='data-grid-header d-flex align-items-center justify-content-between'>
                <h5 className='m-0'>This is a header</h5>
                <div className='data-grid-header-actions'>
                    {
                        (loadingState) ?
                        <i className="fa fa-spinner-third fa-spin"></i> : null
                    }
                    
                </div>
            </div>
        </>
    )
}

//data-grid-header-spinner-active