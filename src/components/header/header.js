import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo} from '../../imgs/m_logo.svg';

import styles from './header.module.scss';

function Header(props) {
    return (
        <header className={styles.header}>
            <Link to='/' className={styles.header__brand}>
                <Logo></Logo>
            </Link>
            <nav className={styles.header__nav}>
                <ul>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <a href={require('../../files/Resume-Matthew_Lodge_Dec2020.pdf').default}>Resume</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
