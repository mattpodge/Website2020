import React from 'react';

import { Button, OutlineButton } from '../../components/button';

/* Stylesheets*/
import './scratchpad.scss';

function Scratchpad() {
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
