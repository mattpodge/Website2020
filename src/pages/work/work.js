import React from 'react';
import { useParams } from 'react-router-dom';

// Components
import { Hero } from '../../components/hero';

// Styles
import styles from './work.module.scss';

// Data
import pages from '../../data';

function Work() {
    let { slug } = useParams();
    let work = pages.filter(page => page.slug === slug);

    return (
        <React.Fragment>
            {work.map(w => (
                <>
                    <Hero key={'hero' + w.id} img={w.hero}></Hero>
                    <main key={'work' + w.id} className={styles.content}>
                        <h1>{w.title}</h1>
                        <p>{w.desc}</p>
                    </main> 
                    {w.imgs ? w.imgs.map((i, index) => (
                        <div key={index} className={styles.work}>
                            <img src={i.img[0].src} srcSet={i.img[0].srcset + ' 2x'} alt={i.img[0].alt}/>
                        </div>
                    )) : null }
                </>
            ))}
        </React.Fragment>       
    )
}

export default Work;
