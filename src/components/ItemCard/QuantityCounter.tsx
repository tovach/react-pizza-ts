import React, {FC} from 'react';
import {useAppSelector} from "../../hooks/redux";
import styles from "./ItemCard.module.scss";

const QuantityCounter:FC<{itemId: number}> = ({itemId}) => {
    const cartItems = useAppSelector(state => state.cart.items);

    let result;
    const isExistIndex = cartItems.findIndex(
        (el) => el.id === itemId
    );
    if (isExistIndex >= 0) {
        result = cartItems[isExistIndex].quantity;
    }
    return (result?<span className={styles.counter}>{result}</span>:<></>);
};

export default QuantityCounter;