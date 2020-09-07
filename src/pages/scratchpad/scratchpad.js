import React, { useState, useEffect } from 'react';

import { Example } from '../../components/example';
import { Button } from '../../components/button';

/* Stylesheets*/
import './scratchpad.scss';

function Scratchpad() {
    const [pageId] = useState('scratchpad');
    useEffect(() => {
        document.body.classList.add(pageId);
        return() => {
            document.body.classList.remove(pageId);
        }
    }, [pageId]);

    return(
        <main className='content'>
            <h1>Scratchpad</h1>
            <Example title='Button Components'>
                <Button href='https://www.google.com'>Button Test</Button>
            </Example>
        </main>
    )
}

export default Scratchpad;
