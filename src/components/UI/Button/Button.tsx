import React, {DetailedHTMLProps, FC, HTMLAttributes, useState} from 'react';
import cn from 'classnames';

import styles from './Button.module.scss';

interface ButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    variant: "primary" | "secondary",
    children: JSX.Element[] | JSX.Element | string;
    active?: boolean
}

const Button: FC<ButtonProps> = ({variant, children, active= false}) => {


    return (
        <button className={cn(styles.button, {
            [styles.primary]: variant === "primary",
            [styles.secondary]: variant === "secondary",
            [styles.secondary && styles.secondaryAcive]: variant === "secondary" && active,
        })}>
            {children}
        </button>
    );
};

export default Button;