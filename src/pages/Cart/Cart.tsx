import React from 'react';
import CartItemList from "../../components/CartItemList/CartItemList";
import {useAppSelector} from "../../hooks/redux";

import styles from './Cart.module.scss'

const Cart = () => {
    const cartItems = useAppSelector(state => state.cart.items)
    return (
        <div className={styles.wrapper}>
            <h4>Корзина</h4>
            <CartItemList items={cartItems}/>
        </div>
    );
};

export default Cart;