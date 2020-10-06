import React from 'react';

import styles from './header.module.scss';

function Header(props) {
    return (
        <header className={styles.header}>
            <div className={styles.header__title}>Matt<span>hew</span> Lodge</div>
            <div className={styles.header__subtitle}>User Interface, Experience, &amp; Graphic Design</div>
        </header>
    );
};

export default Header;