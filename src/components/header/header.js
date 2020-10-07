import React from 'react';
import { Link } from 'react-router-dom';

import styles from './header.module.scss';

function Header(props) {
    return (
        <header className={styles.header}>
            <div className={styles.header__brand}>M</div>
            <nav className={styles.header__nav}>
                <ul>
                    <li>
                        <Link to={{ pathname: '', hash: 'work'}}>Work</Link>
                    </li>
                    <li>
                        <Link to='/resume'>Resume</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;