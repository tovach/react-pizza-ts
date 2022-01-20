import React, {FC} from 'react';
import {ReactComponent as CartIcon} from "./img/cart-icon.svg";
import {Link} from "react-router-dom";

import styles from './OrderCounter.module.scss';

const OrderCounter:FC = () => {
    return (
        <Link to={'/cart'}>
            <button className={styles.wrapper}>
                <span className={styles.price}>0 ₽</span>
                <span className={styles.divider}></span>
                <span className={styles.qty}>
                    <CartIcon/>
                    0</span>
            </button>
        </Link>
    );
};

export default OrderCounter;