import React from 'react';

import Obfuscate from 'react-obfuscate';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Home() {
    return(
        <React.Fragment>
            <div className='title'>
                <h1>Matthew Lodge</h1>
                <p>User Interface &amp; Experience Designer</p>
            </div>

            <div className='socials'>
                <Obfuscate className='socials__link' email='mattpodge@gmail.com'>
                    <FontAwesomeIcon icon={faEnvelope} />
                </Obfuscate>
                <a className='socials__link' href='https://www.linkedin.com/in/matthew-lodge-90753ba1/' title='Visit my LinkedIn profile'>
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
            </div>
        </React.Fragment>
    )
}

export default Home;
