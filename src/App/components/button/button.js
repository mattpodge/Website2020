import React from 'react';
import classNames from 'classnames/bind';
import Proptypes from 'prop-types';

/* Stylesheets */
import styles from './button.module.scss';

/* Bind classnames to modular styles */
let cx = classNames.bind(styles);

function Button(props) {
    let {className, variant, block, ...rest} = props;
    let classes = cx('button', {
        'button--outline': props.variant === 'outline',
        'button--block': props.block
    }, className);

    return(
        <button className={classes} {...rest}>
            {props.children}
        </button>
    )
}

Button.propTypes = {
    className: Proptypes.string,
    block: Proptypes.bool,
    variant: Proptypes.oneOf(['outline'])
};

function RegularButton(props) {
    return(
        <Button {...props}>
            {props.children}
        </Button>
    )
}

function RegularBlockButton(props) {
    return(
        <Button block {...props}>
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
        <Button variant='outline' block {...props}>
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
