import React, { useState, useEffect } from 'react';

import { Post } from '../../components/post';

function Home() {
    
    // Apply a class to the body element for easier specific styling
    const [pageId] = useState('homepage');
    useEffect(() => {
        document.body.classList.add(pageId);
        return() => {
            document.body.classList.remove(pageId);
        }
    }, [pageId]);

    return(
        <React.Fragment>
            <Post title='Hey, this is a test' link='scratchpad'>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non ipsum reiciendis molestias consectetur cumque atque laborum quo iusto veritatis! Corporis vitae enim deserunt tempora alias! Saepe laborum doloribus et ipsum?</p>
            </Post>
            <Post title='Another test' link='contact'></Post>
            <Post title='The third test' link='recipes'></Post>
            <Post title='And the last test' link='about'></Post>
        </React.Fragment>
    )
}

export default Home;
