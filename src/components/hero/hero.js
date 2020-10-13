import React from 'react';

import styles from './hero.module.scss';

function Hero(props) {
    return (
        <div className={styles.hero}>
            <img src={props.img} alt={props.alt}/>
        </div>
    );
};

export default Hero;