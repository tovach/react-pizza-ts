import React, {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";

import styles from './Goods.module.scss'
import ItemList from "../ItemList/ItemList";
import ItemListPreloader from "../ItemList/ItemListPreloader";
import {addItems} from "../../store/slices/goodsSlice";
import {useGetGoodsQuery} from "../../store/api/goods.api";


const Goods: FC = () => {
    const {sortBy} = useAppSelector(state => state.goods);
    const {category} = useAppSelector(state => state.goods);
    const goods = useAppSelector(state => state.goods.items);
    const dispatch = useAppDispatch();
    const {data, isLoading} = useGetGoodsQuery({category, sortBy});


    useEffect(() => {
        dispatch(addItems(data!));

    }, [data, isLoading])


    return (
        <section className={styles.wrapper}>
            <h3 className={styles.heading}>Все пиццы</h3>

            {!isLoading
                ? <ItemList items={goods}/>
                : <ItemListPreloader quantity={15}/>

            }
        </section>
    );
};

export default Goods;