import React from 'react';

import styles from './post.module.scss';

function Post(props) {
    return (
        <div className={styles.post}>
            <div className={styles.thumbnail}>
                <div className={styles.thumbnail__image}></div>
            </div>
            <h3>Test Title</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi assumenda accusamus ut ratione ab voluptate molestias, eum beatae doloremque soluta eligendi esse suscipit, ullam adipisci, dignissimos ex aliquam earum impedit.</p>
        </div>
    );
};

export default Post;