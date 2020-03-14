import React from 'react';
import './_scene-container.scss';

interface Props{
    children: JSX.Element[] | JSX.Element
}

function SceneContainer(props: Props){

    //prop variables

    return(
        <div className='scene-container container-fluid px-lg-0'>
            <div className={`row d-flex no-gutters`}>
                    {props.children}
            </div>
        </div>
    )
}

export default SceneContainer;