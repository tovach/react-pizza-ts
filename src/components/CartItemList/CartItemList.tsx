import React, {FC} from 'react';
import {PizzaItemCart} from "../../types/interfaces";
import CartItem from "../CartItem/CartItem";

import styles from './CartItemList.module.scss'

interface CartItemListProps {
    items: PizzaItemCart[];
}

const CartItemList:FC<CartItemListProps> = ({items}) => {
    return (
        <section className={styles.wrapper}>
            <ul className={styles.list}>
                {items.map(el =>
                    <li className={styles.item} key={el.id}><CartItem item={el}/></li>
                )}
            </ul>
        </section>
    );
};

export default CartItemList;