import React from 'react';
import './_side-nav.scss';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-treble';
import { useFetch } from 'treble-fetch';
import UseFetch from '../../scenes/use-fetch';
import uniqid from 'uniqid';
function SideNav() {
    //const { response, loading } = useFetch('http://play.mediafish.io/wordpress/wp-json/better-rest-endpoints/v1/posts'); 

    return (
        <>
            <div id='side-nav' className='pt-4'>
                <Nav defaultActiveKey="/treble-gsm" className="flex-column">
                    <Link to={'/treble-gsm'} className='nav-link'><i className="fas fa-code pr-3"></i>Treble-GSM</Link>
                    <Link to={'/treble-class'} className='nav-link'><i className="fas fa-code pr-3"></i>Treble-Class</Link>
                    <Link to={'/history'} className='nav-link'><i className="fas fa-code pr-3"></i>History</Link>
                    <Link to={'/test-dispatchers'} className='nav-link'><i className="fas fa-code pr-3"></i>Dispatchers</Link>
                    <Link to={'/use-fetch'} prefetch={['https://jsonplaceholder.typicode.com/photos?_limit=1000']} className='nav-link'>
                        <i className="fas fa-code pr-3"></i>useFetch
                    </Link>
                    <Link to={'/posts'}
                        prefetch={[
                            'http://play.mediafish.io/wordpress/wp-json/better-rest-endpoints/v1/posts'
                        ]}
                        className='nav-link'>
                        <i className="fas fa-code pr-3"></i>WP Posts
                    </Link>
                </Nav>
            </div>
        </>
    )
}

export default SideNav;