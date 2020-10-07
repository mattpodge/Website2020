import React, { useState, useEffect } from 'react';

import { Post } from '../../components/post';

import styles from './home.module.scss';

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
            <div className={styles.intro}>
                <h1>Hello there, I'm <span>Matthew Lodge</span>...</h1>
                <p>...and I'm a <span>User Interface Designer</span> based in <span>Milton Keynes, England</span>. I've previously had roles as a <span>Graphic Designer</span>, and <span>User Experience Designer</span>.</p>
                <p>I'm currently looking for a <span>full-time position</span>.</p>
            </div>
            <Post title='Hey, this is a test' link='example-1' id='work'>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non ipsum reiciendis molestias consectetur cumque atque laborum quo iusto veritatis! Corporis vitae enim deserunt tempora alias! Saepe laborum doloribus et ipsum?</p>
            </Post>
            <Post title='Another test' link='example-2'></Post>
            <Post title='The third test' link='example-3'></Post>
            <Post title='And the last test' link='example-4'></Post>
            <Post title='The third test' link='example-5'></Post>
            <Post title='And the last test' link='example-6'></Post>
            <Post title='The third test' link='example-8'></Post>
            <Post title='And the last test' link='example-9'></Post>
        </React.Fragment>
    )
}

export default Home;
