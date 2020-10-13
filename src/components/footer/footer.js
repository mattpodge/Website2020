import React from 'react';

import Obfuscate from 'react-obfuscate';

import styles from './footer.module.scss';

function Footer(props) {
    return(
        <div className={styles.footer}>
            Hey, feel free to email me at <Obfuscate email='mattpodge@gmail.com' headers={{ subject: 'Hey Matthew, I Like Your Work!' }}></Obfuscate>. Or you can find me on <a href='https://www.linkedin.com/in/matthew-lodge-90753ba1/'>LinkedIn</a>.
        </div>
    );
}

export default Footer;