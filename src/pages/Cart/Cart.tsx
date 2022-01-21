import React from 'react';
import CartItemList from "../../components/CartItemList/CartItemList";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";

import Button from "../../components/UI/Button/Button";
import styles from './Cart.module.scss'
import {Link} from "react-router-dom";
import {cleanOut} from "../../store/slices/cartSlice";

const Cart = () => {
    const cartItems = useAppSelector(state => state.cart.items);
    const totalPrice = useAppSelector(state => state.cart.totalPrice)
    const totalQuantity = useAppSelector(state => state.cart.totalQuantity)
    const dispatch = useAppDispatch();

    return (
        <div className={styles.wrapper}>
            {cartItems.length
                ? <section>
                    <div className={styles.header}>
                        <h4 className={styles.heading}>Корзина</h4>
                        <Button onClick={() => dispatch(cleanOut())} variant={"secondary"}>Очистить корзину</Button>
                    </div>
                    <CartItemList items={cartItems}/>

                    <div className={styles.footer}>

                        <div className={styles.left}>
                            <p>Всего пицц:<span> {totalQuantity}</span></p>
                            <Link to={'/'}>
                                <Button variant={"secondary"}>Вернуться назад</Button>
                            </Link>
                        </div>

                        <div className={styles.right}>
                            <p>Сумма заказа:<span> {totalPrice} ₽</span></p>

                            <Button variant={"primary"}>Оплатить сейчас</Button>

                        </div>
                    </div>
                </section>
                : <section className={styles.cartEmpty}>
                    <h4 className={styles.heading}>Корзина пуста 😕</h4>
                    <p>
                        Вероятней всего, вы не заказывали ещё пиццу.
                        Для того, чтобы заказать пиццу, перейди на главную страницу.
                    </p>
                    <Link to={'/'}>
                        <Button variant={"secondary"}>Вернутся назад</Button>
                    </Link>

                </section>
            }


        </div>
    );
};

export default Cart;