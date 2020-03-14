import React from 'react';
import './_side-nav.scss';
import Nav from 'react-bootstrap/Nav';
import WordFishLogo from '../../../assets/logo-wordfish-icon.svg';
import {Link} from 'react-router-dom';

function SideNav(){
    return(
        <>
            <div id='side-nav' className='pt-4'>
                <Nav defaultActiveKey="/treble-gsm" className="flex-column">
                    <Link to={'/treble-gsm'} className='nav-link'><i className="fas fa-code pr-3"></i>Treble-GSM</Link>
                </Nav>
            </div>
        </>
    )
}

export default SideNav;