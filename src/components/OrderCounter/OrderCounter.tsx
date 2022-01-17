import React, {FC} from 'react';
import {ReactComponent as CartIcon} from "./img/cart-icon.svg";

import styles from './OrderCounter.module.scss';

const OrderCounter:FC = () => {
    return (
            <button className={styles.wrapper}>
                <span className={styles.price}>0 ₽</span>
                <span className={styles.divider}></span>
                <span className={styles.qty}>
                    <CartIcon/>
                    0</span>
            </button>
    );
};

export default OrderCounter;