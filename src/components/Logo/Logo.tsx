import React, {FC} from 'react';
import { ReactComponent as LogoIcon } from './img/logo-icon.svg';

import styles from './Logo.module.scss';

const Logo:FC = () => {
    return (
        <div className={styles.wrapper}>
            <LogoIcon/>
            <div>
                <h1 className={styles.heading}>REACT PIZZA</h1>
                <h5 className={styles.subHeading}>самая вкусная пицца во вселенной</h5>
            </div>
        </div>
    );
};

export default Logo;