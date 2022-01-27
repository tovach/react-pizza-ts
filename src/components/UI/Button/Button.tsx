import React, {DetailedHTMLProps, FC, HTMLAttributes, ReactNode} from 'react';
import cn from 'classnames';

import styles from './Button.module.scss';

interface ButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    variant: "primary" | "secondary",
    children: JSX.Element | ReactNode;
    active?: boolean
}

const Button: FC<ButtonProps> = ({variant, children, active= false, onClick}) => {


    return (
        <button onClick={onClick} className={cn(styles.button, {
            [styles.primary]: variant === "primary",
            [styles.primary && styles.primaryActive]: variant === "primary" && active,
            [styles.secondary]: variant === "secondary",
            [styles.secondary && styles.secondaryActive]: variant === "secondary" && active,
        })}>
            {children}
        </button>
    );
};

export default Button;