import React from 'react';

interface Props{
    children: JSX.Element[] | JSX.Element
}

function ContentRow(props: Props){

    //props variables


    return(
        <div className={'col-12 col-lg-12'}>
            <div className={'row mx-lg-0 px-lg-3'} style={{height: 100 + '%'}}>
                {props.children}
            </div>
        </div>
    )
}

export default ContentRow;

