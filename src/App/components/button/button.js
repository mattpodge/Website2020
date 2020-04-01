import React from 'react';

/* Stylesheets */
import styles from './button.module.scss';

function Button(props) {
    return(
        <button className={styles.button} {...props}>
            {props.children}
        </button>
    )
}

export default Button;
