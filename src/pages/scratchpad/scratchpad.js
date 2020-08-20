import React, { useState, useEffect } from 'react';

import { Button, OutlineButton } from '../../components/button';

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
        <React.Fragment>
            <h1>Scratchpad</h1>
            <Button className='test-class'>Default button</Button>
            <br />
            <OutlineButton href='https://www.google.co.uk' target='_blank'>Default Button</OutlineButton>
        </React.Fragment>
    )
}

export default Scratchpad;
