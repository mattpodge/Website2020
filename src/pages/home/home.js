import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

/* Stylesheets*/
import './home.scss';


function Home() {
    const [pageId] = useState('homepage');
    useEffect(() => {
        document.body.classList.add(pageId);
        return() => {
            document.body.classList.remove(pageId);
        }
    }, [pageId]);

    return(
        <React.Fragment>
            <h1 className='heading'>mlodge.me</h1>
            <p className='subheading'><Link to='/scratchpad'>[i'm workin' on it]</Link></p>
        </React.Fragment>
    )
}

export default Home;
