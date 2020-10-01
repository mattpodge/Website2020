import React, { useState, useEffect } from 'react';

import { Post } from '../../components/post';

/* Stylesheets*/
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
            <header className={styles.header}>
                <div className={styles.header__title}>Matt<span>hew</span> Lodge</div>
                <div className={styles.header__subtitle}>User Interface, Experience, &amp; Graphic Design</div>
            </header>
            <Post title='Hey, this is a test' link='testing'>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non ipsum reiciendis molestias consectetur cumque atque laborum quo iusto veritatis! Corporis vitae enim deserunt tempora alias! Saepe laborum doloribus et ipsum?</p>
            </Post>
            <Post title='Another test' link='contact'></Post>
            <Post title='The third test' link='recipes'></Post>
            <Post title='And the last test' link='about'></Post>
        </React.Fragment>
    )
}

export default Home;
