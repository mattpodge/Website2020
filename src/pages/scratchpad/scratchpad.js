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
            <Example title='Headings Typography'>
                <h1>The Quick Brown Fox Jumps Over The Lazy Dog</h1>
                <h2>The Quick Brown Fox Jumps Over The Lazy Dog</h2>
                <h3>The Quick Brown Fox Jumps Over The Lazy Dog</h3>
                <h4>The Quick Brown Fox Jumps Over The Lazy Dog</h4>
                <h5>The Quick Brown Fox Jumps Over The Lazy Dog</h5>
                <h6>The Quick Brown Fox Jumps Over The Lazy Dog</h6>
            </Example>
            <Example title='Body Copy Typography'>
                <h1>The Quick Brown Fox Jumps Over The Lazy Dog</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem iusto, laborum autem officiis aliquid totam praesentium. Reprehenderit deleniti error nemo autem ipsa blanditiis a, voluptatem, veritatis exercitationem quibusdam cupiditate quod!</p>
                <p>At dicta facilis deserunt eaque commodi ab expedita et mollitia, ut alias facere maiores minima nam. Labore delectus perspiciatis in reprehenderit, autem quis sapiente beatae suscipit praesentium accusantium nulla earum.</p>
                <h2>The Quick Brown Fox Jumps Over The Lazy Dog</h2>
                <p>Assumenda numquam accusantium maiores laudantium reprehenderit molestiae. Quisquam sunt eius, beatae magni, quam dolor consectetur tempore maxime sint, voluptate obcaecati itaque soluta. Eligendi repudiandae rerum nam culpa ad, sint minima!</p>
                <h3>The Quick Brown Fox Jumps Over The Lazy Dog</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus officiis quos culpa dignissimos consequatur nostrum asperiores temporibus eveniet provident minima?</p>
                <ul>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Quam excepturi ex pariatur doloremque.</li>
                    <li>Corrupti alias iste veritatis possimus!</li>
                    <li>Quaerat, voluptate dolorum! Sequi, voluptatem!</li>
                </ul>
                <p>Commodi assumenda unde, deserunt voluptatibus in laudantium eius eaque rem ratione doloremque iste accusantium praesentium aut deleniti temporibus earum aliquam.</p>
            </Example>
            <Example title='Button Components'>
                <Button href='https://www.google.com'>Button Test</Button>
            </Example>
        </main>
    )
}

export default Scratchpad;
