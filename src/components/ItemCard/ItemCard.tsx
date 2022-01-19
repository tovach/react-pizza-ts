import React, {FC} from 'react';
import {PizzaItem} from "../../types/interfaces";

import styles from './ItemCard.module.scss'
import Button from "../UI/Button/Button";


interface ItemCardProps {
    item: PizzaItem
}

const ItemCard:FC<ItemCardProps> = ({item}) => {
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
                                <button disabled={!el.availability} className={styles.button}>{el.value}</button>
                            </li>
                        )}
                    </ul>

                    <ul className={styles.list}>
                        {item.size.map(el =>
                            <li className={styles.item} key={el.value}>
                                <button disabled={!el.availability} className={styles.button}>{el.value}</button>
                            </li>
                        )}
                    </ul>
                </div>

                <div className={styles.footerWrapper}>
                    <h5>от {item.price} ₽</h5>
                    <Button variant={"primary"}>Добавить</Button>
                </div>

            </footer>
        </article>
    );
};

export default ItemCard;