import React from 'react';
import { Link } from 'react-router-dom';

import styles from './post.module.scss';

function Post(props) {
    return (
        <div className={styles.post} {...props}>
            <div className={styles.thumbnail}>
                <Link className={styles.thumbnail__image} to={'/work/' + props.link}>
                    <img src={props.hero} alt='Test'/>
                </Link>
            </div>
            <h2 className={styles.post__title}>{props.title}</h2>
            {props.children}
        </div>
    );
};

export default Post;
