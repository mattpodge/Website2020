import React from 'react';
import { Link } from 'react-router-dom';

import styles from './post.module.scss';

function Post(props) {
    return (
        <div className={styles.post} {...props}>
            <div className={styles.thumbnail}>
                <Link className={styles.thumbnail__image} to={props.link}></Link>
            </div>
            <h3>{props.title}</h3>
            {props.children}
            <Link to={props.link}>[see &amp; read more]</Link>
        </div>
    );
};

export default Post;