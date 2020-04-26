import React from 'react';
import './_side-nav.scss';
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom';
//import {useFetch} from 'treble-gsm';
import uniqid from 'uniqid';

function SideNav(){
   // const {response, loading, error} = useFetch('http://play.mediafish.io/wordpress/wp-json/wp/v2/posts',{default: []})
    return(
        <>
            <div id='side-nav' className='pt-4'>
                <Nav defaultActiveKey="/treble-gsm" className="flex-column">
                    <Link to={'/treble-gsm'} className='nav-link'><i className="fas fa-code pr-3"></i>Treble-GSM</Link>
                    <Link to={'/treble-class'} className='nav-link'><i className="fas fa-code pr-3"></i>Treble-Class</Link>
                    <Link to={'/use-fetch'} className='nav-link'><i className="fas fa-code pr-3"></i>useFetch</Link>
                    {/* {
                        (loading && response.length === 0) ?
                        <p>Loading...</p> : 
                        response?.map((item: any) => {
                            return(
                                <React.Fragment key={uniqid()}>
                                    <Link to={`/${item?.slug}`} className='nav-link'><i className="fas fa-code pr-3"></i>{item?.title?.rendered}</Link> 
                                </React.Fragment>
                            )
                        })

                    } */}
                </Nav>
            </div>
        </>
    )
}

export default SideNav;