import React from 'react';
import classNames from 'classnames/bind';

/* Stylesheets */
import styles from './button.module.scss';

let cx = classNames.bind(styles);

function Button(props) {
    let className = cx({
        button: true,
        'button--outline': props.variant === 'outline',
        'button--block': props.block
    });
    return(
        <button className={className} {...props}>
            {props.children}
        </button>
    )
}

function RegularButton(props) {
    return(
        <Button {...props}>
            {props.children}
        </Button>
    )
}

function RegularBlockButton(props) {
    return(
        <Button block={true} {...props}>
            {props.children}
        </Button>
    )
}

function OutlineButton(props) {
    return(
        <Button variant='outline' {...props}>
            {props.children}
        </Button>
    )
}

function OutlineBlockButton(props) {
    return(
        <Button variant='outline' block={true} {...props}>
            {props.children}
        </Button>
    )
}

export {
    RegularButton,
    RegularBlockButton,
    OutlineButton,
    OutlineBlockButton,
};
export default Button;
