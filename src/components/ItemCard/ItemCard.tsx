import React, {FC, useState} from 'react';
import {PizzaItem} from "../../types/interfaces";
import Button from "../UI/Button/Button";
import {ReactComponent as PlusIcon} from "./img/plus-icon.svg";


import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {addToCart} from "../../store/slices/cartSlice";
import cn from "classnames";

import styles from './ItemCard.module.scss'

interface ItemCardProps {
    item: PizzaItem
}

const ItemCard: FC<ItemCardProps> = ({item}) => {

    const {items} = useAppSelector(state => state.cart);
    const dispatch = useAppDispatch();

    const [dough, setDough] = useState(item.dough[0].value);
    const [size, setSize] = useState(item.size[0].value);

    const isExist = items.some((el) => (el.title === item.title) && (el.dough === dough) && (el.size === size));

    const onItemAdd = (item: PizzaItem) => {
        dispatch(addToCart({...item, size, dough, quantity: 1,}));
    };


    return (
        <article className={styles.wrapper}>
            <header className={styles.header}>
                <img src={item.img} alt={item.title}/>
            </header>
            <main className={styles.main}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>

            </main>
            <footer className={styles.footer}>

                <div className={styles.controls}>
                    <ul className={styles.list}>
                        {item.dough.map(el =>
                            <li className={styles.item} key={el.value}>
                                <button onClick={() => setDough(el.value)} disabled={!el.availability}
                                        className={cn(styles.button, {
                                            [styles.buttonActive]: el.value === dough
                                        })}>{el.value}</button>
                            </li>
                        )}
                    </ul>

                    <ul className={styles.list}>
                        {item.size.map(el =>
                            <li className={styles.item} key={el.value}>
                                <button onClick={() => setSize(el.value)} disabled={!el.availability}
                                        className={cn(styles.button, {
                                            [styles.buttonActive]: el.value === size
                                        })}>{el.value}</button>
                            </li>
                        )}
                    </ul>
                </div>

                <div className={styles.footerWrapper}>
                    <h5>от {item.price} ₽</h5>
                    <Button onClick={() => onItemAdd(item)} variant={"primary"} active={isExist}>
                        {isExist ? 'В корзине' : <><PlusIcon/>Добавить</>}
                    </Button>
                </div>

            </footer>
        </article>
    );
};

export default ItemCard;