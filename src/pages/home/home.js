import React, { useState, useEffect } from 'react';

// Components
import { Post } from '../../components/post';

// Styles
import styles from './home.module.scss';

// Data
import pages from '../../data';

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
            {pages.map(post => (
                <Post key={post.id} data={post} link={post.slug}></Post>
            ))}
            
        </React.Fragment>
    )
}

export default Home;
