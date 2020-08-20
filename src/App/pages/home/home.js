import React from 'react';
import { Link } from 'react-router-dom';

/* Stylesheets*/
import './home.scss';


function Home() {
    return(
        <React.Fragment>
            <h1 className='heading'>mlodge.me</h1>
            <p className='subheading'><Link to='/scratchpad'>[i'm workin' on it]</Link></p>
        </React.Fragment>
    )
}

export default Home;
