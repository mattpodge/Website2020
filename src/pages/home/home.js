import React, { useState, useEffect } from 'react';

// Components
import { Post } from '../../components/post';

// Styles
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
            <Post title='Work Example One' link='work-one' id='work'></Post>
            <Post title='Work Example Two' link='work-two'></Post>
            <Post title='Work Example Three' link='work-three'></Post>
            <Post title='Work Example Four' link='work-four'></Post>
        </React.Fragment>
    )
}

export default Home;
