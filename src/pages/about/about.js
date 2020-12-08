import React from 'react';

import image from '../../imgs/ben-nevis-shot.png';
import styles from './about.module.scss';

function About(props) {
    return(
        <React.Fragment>
            <div className={styles.heading}>
                <h1>Hello, I'm <span>Matthew Lodge</span></h1>
            </div>
            <main className={styles.content}>
                <p>And for the last 5(ish) years I've been a <span>User Interface Designer</span> (with some UX work here &amp; there) in the software industry. Prior to that I spent 10+ years as a <span>Web &amp; Graphic Designer</span> working on everything from brand design to marketing material.</p>
                <p>I enjoy music any time of day, playing video games and watching movies (once the work is done), and hiking holidays with my girlfriend.</p>
                <p>I'm am currently on the search for a <span>permanent UI Designer</span> role.</p>
            </main>
            <aside className={styles.aside}>
                <h6>On Rotation...</h6>
                <dl>
                    <dt>Alive 2007</dt>
                    <dd>Daft Punk</dd>
                </dl>
                <h6>Playing...</h6>
                <dl>
                    <dt>Kentucky Route Zero</dt>
                    <dd>Cardboard Computer</dd>
                </dl>
                <h6>Here's Me</h6>
                <img className={styles.headshot} src={image} alt="Matthew Lodge sat at the peak of Ben Nevis, enjoying a glass of Scotch" />
            </aside>
        </React.Fragment>
    )
}

export default About;
