import React, {FC} from 'react';
import {PizzaItemCart} from "../../types/interfaces";

import {ReactComponent as PlusIcon} from "./img/plus-icon.svg";
import {ReactComponent as MinusIcon} from "./img/minus-icon.svg";
import {ReactComponent as RemoveIcon} from "./img/remove-icon.svg";

import styles from './CartItem.module.scss';
import {useAppDispatch} from "../../hooks/redux";
import {decreaseItem, increaseItem, removeFromCart} from "../../store/slices/cartSlice";

interface CartItemProps {
    item: PizzaItemCart
}

const CartItem: FC<CartItemProps> = ({item}) => {
    const dispatch = useAppDispatch();
    return (
        <article className={styles.wrapper}>

            <div className={styles.left}>
                <div className={styles.image}>
                    <img src={item.img} alt={item.title}/>
                </div>

                <div className={styles.text}>
                    <h4>{item.title}</h4>
                    <p>{item.dough}, {item.size}</p>
                </div>
            </div>

            <div className={styles.right}>

                <div className={styles.controls}>
                    <button onClick={() => dispatch(increaseItem(item))} className={styles.button}><PlusIcon/></button>
                    <span>{item.quantity}</span>
                    <button onClick={() => dispatch(decreaseItem(item))} className={styles.button}><MinusIcon/></button>
                </div>

                <div className={styles.price}>
                    <h3>{item.quantity * item.price}</h3>
                </div>

                <div onClick={() => dispatch(removeFromCart(item))} className={styles.remove}>
                    <button className={styles.button}><RemoveIcon/></button>
                </div>
            </div>

        </article>
    );
};

export default CartItem;