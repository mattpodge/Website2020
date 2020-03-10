import React from 'react';

import Obfuscate from 'react-obfuscate';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFilePdf } from '@fortawesome/free-regular-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


function Home() {
    return(
        <React.Fragment>
            <div className='title'>
                <h1>Matthew Lodge</h1>
                <p>UI/UX, Web, and Graphic Design</p>
            </div>

            <div className='socials'>
                <a className='socials__link' href='../downloads/matthew_lodge-portfolio_2020.pdf' title='Download my portfolio as a PDF'>
                    <FontAwesomeIcon icon={faFilePdf} />
                </a>
                <Obfuscate className='socials__link' email='mattpodge@gmail.com' headers={{ subject: 'Sending hello through mlodge.me!'}} title='Send me a friendly email'>
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
