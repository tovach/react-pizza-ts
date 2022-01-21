import React, {FC} from 'react';
import {ReactComponent as CartIcon} from "./img/cart-icon.svg";
import {Link} from "react-router-dom";

import styles from './OrderCounter.module.scss';
import {useAppSelector} from "../../hooks/redux";

const OrderCounter:FC = () => {
    const quantity = useAppSelector(state=> state.cart.totalQuantity)
    const price = useAppSelector(state=> state.cart.totalPrice)
    return (
        <Link to={'/cart'}>
            <button className={styles.wrapper}>
                <span className={styles.price}>{price} ₽</span>
                <span className={styles.divider}></span>
                <span className={styles.qty}>
                    <CartIcon/>
                    {quantity}</span>
            </button>
        </Link>
    );
};

export default OrderCounter;