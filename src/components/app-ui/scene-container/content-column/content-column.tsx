import React, {useContext} from 'react';

interface Props{
    children: JSX.Element[] | JSX.Element
}

function ContentColumn(props: Props){
    //props variables

 

    return(
        <div className={'scene-container-content-column col-12 pb-4 p-4 col-lg-12'}>
            <div className={`row d-flex no-gutters`}>
                <div className="col-12">
                    <div className={`row d-flex justify-content-center no-gutters`}>
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContentColumn;

