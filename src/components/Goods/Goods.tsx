import React, {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";

import styles from './Goods.module.scss'
import {useAxios} from "../../hooks/axios";
import {PizzaItem} from "../../types/interfaces";
import ItemList from "../ItemList/ItemList";
import ItemListPreloader from "../ItemList/ItemListPreloader";
import {addItems} from "../../store/slices/goodsSlice";


const Goods: FC = () => {

    const sortType = useAppSelector(state => state.goods.sortBy);
    const category = useAppSelector(state => state.goods.category);

    const goods = useAppSelector(state => state.goods.items);

    const dispatch = useAppDispatch();

    const {
        response,
        error,
        loading
    } = useAxios<PizzaItem[]>(`/goods?category_like=${category}&_sort=${sortType.value}&_order=${sortType.order}`);


    useEffect(() => {
        dispatch(addItems(response!));

    }, [response,loading])


    return (
        <section className={styles.wrapper}>
            <h3 className={styles.heading}>Все пиццы</h3>

            {!loading
                ? <ItemList items={goods}/>
                : <ItemListPreloader quantity={15}/>

            }
        </section>
    );
};

export default Goods;