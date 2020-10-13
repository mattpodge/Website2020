import React from 'react';

import styles from './about.module.scss';

function About(props) {
    return(
        <React.Fragment>
            <main className={styles.content}>
                <h1>About Me</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda, quo vel temporibus ad eos enim quas veritatis natus dolor voluptate possimus eveniet est, ratione aliquid illo. Blanditiis dolores aliquam enim!</p>
                <p>Error asperiores debitis quisquam laudantium eos provident nostrum in! Ad, aliquam sed. Maiores consequatur at non deserunt, obcaecati doloribus itaque sequi, fuga ex quis ducimus quisquam quam quibusdam, earum tempore.</p>
                <p>Consequuntur cupiditate placeat itaque tempore et, reiciendis sint. Necessitatibus odio odit accusamus ipsa tempore exercitationem, placeat commodi quasi ea reprehenderit nemo nobis aut optio voluptatibus aliquam ex sequi. Velit, iste.</p>
            </main>
            <aside className={styles.aside}>
                <h6>Recently Playing</h6>
                <ul>
                    <li>Game</li>
                    <li>Game</li>
                    <li>Game</li>
                </ul>
                <h6>On Rotation</h6>
                <ul>
                    <li>Album - Artist</li>
                    <li>Album - Artist</li>
                    <li>Album - Artist</li>
                </ul>
                <h6>Here's Me</h6>
                <p>Pic</p>
            </aside>
        </React.Fragment>
    )
}

export default About;