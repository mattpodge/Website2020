import React, { useState, useEffect } from 'react';

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
                <div className={styles.header__subtitle}>User Interface/Experience, &amp; Graphic Design</div>
            </header>
        </React.Fragment>
    )
}

export default Home;
