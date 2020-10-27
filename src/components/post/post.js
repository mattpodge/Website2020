import React from 'react';
import { Link } from 'react-router-dom';

import styles from './post.module.scss';

function Post(props) {
    return (
        <div className={styles.post} {...props}>
            <div className={styles.thumbnail}>
                <Link className={styles.thumbnail__image} to={'/work/' + props.link}>
                    <img src={props.data.hero[0].src} srcSet={props.data.hero[0].srcset + ' 2x'} alt={props.data.hero[0].alt} />
                </Link>
            </div>
            <h2 className={styles.post__title}>{props.data.title}</h2>
        </div>
    );
};

export default Post;
