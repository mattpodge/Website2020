import React from 'react';

/* Stylesheets */
import styles from './example.module.scss';

function Example(props) {
    return(
        <div className={styles.example}>
            <div className={styles.example__iframe}>
                {props.children}
            </div>
            <div className={styles.example__code}>
                <code>
                    This is some test code
                </code>
            </div>
        </div>
    )
};

export default Example;