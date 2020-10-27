import React from 'react';

import styles from './hero.module.scss';

function Hero(props) {
    return (
        <div className={styles.hero}>
            <img src={props.img[0].src} srcSet={props.img[0].srcset + ' 2x'} alt={props.img[0].alt}/>
        </div>
    );
};

export default Hero;
