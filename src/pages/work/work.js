import React from 'react';

// Components
//import { Hero } from '../../components/hero';

// Styles
import styles from './work.module.scss';

// Data
import pages from './data';
import { useParams } from 'react-router-dom';
import { Hero } from '../../components/hero';

function Work(props) {
    let { slug } = useParams();
    let work = pages.filter(page => page.slug === slug);
    console.log(work);

    return (
        <React.Fragment>
            {work.map(w => (
                <>
                    <Hero></Hero>
                    <main key={w.id} className={styles.content}>
                        <h1>{w.title}</h1>
                        <p>{w.desc}</p>
                    </main> 
                </>
            ))}
        </React.Fragment>       
    )
}

export default Work;
