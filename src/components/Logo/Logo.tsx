import React, {FC} from 'react';
import {ReactComponent as LogoIcon} from './img/logo-icon.svg';
import {Link} from "react-router-dom";
import styles from './Logo.module.scss';

const Logo: FC = () => {
    return (
        <Link to={'/'}>
            <div className={styles.wrapper}>
                <LogoIcon/>
                <div>
                    <h1 className={styles.heading}>REACT PIZZA</h1>
                    <h5 className={styles.subHeading}>самая вкусная пицца во вселенной</h5>
                </div>
            </div>
        </Link>
    );
};

export default Logo;