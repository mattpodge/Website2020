import React from 'react';

import Obfuscate from 'react-obfuscate';

import styles from './footer.module.scss';

function Footer(props) {
    return(
        <div className={styles.footer}>
            This site was built by myself as a chance to learn React. Feel free to email me <Obfuscate email='mattpodge@gmail.com' headers={{ subject: 'Hey Matthew, I Like Your Work!' }}></Obfuscate>, or you can find me on <a href='https://www.linkedin.com/in/matthew-lodge-90753ba1/'>LinkedIn</a>.
        </div>
    );
}

export default Footer;