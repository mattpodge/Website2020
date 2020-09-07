import React from 'react';

/* Stylesheets */
import styles from './example.module.scss';

function Example(props) {
    return(
        <div className={styles.example}>
            <div className={styles.example__header}>
                {props.title}
            </div>
            <div className={styles.example__iframe}>
                {props.children}
            </div>
        </div>
    )
};

export default Example;