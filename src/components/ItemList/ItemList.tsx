import React, {FC} from 'react';
import {PizzaItem} from "../../types/interfaces";
import ItemCard from "../ItemCard/ItemCard";

import styles from './ItemList.module.scss'

interface ItemListProps {
    items: PizzaItem[] | undefined;
}

const ItemList: FC<ItemListProps> = ({items}) => {
    return (
        <ul className={styles.list}>
            {items?.map(el =>
                <li key={el.title}><ItemCard item={el}/></li>
            )}
        </ul>
    );
};

export default ItemList;