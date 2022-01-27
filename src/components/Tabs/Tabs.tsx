import React, {FC, useEffect, useState} from 'react';

import styles from './Tabs.module.scss'
import Button from "../UI/Button/Button";
import TabsPreloader from "./TabsPreloader";
import {useAppDispatch} from "../../hooks/redux";
import {setCategory} from "../../store/slices/goodsSlice";
import {useGetCategoriesQuery} from "../../store/api/goods.api";


const Tabs: FC = () => {
    const {data, isLoading} = useGetCategoriesQuery()
    const [categories, setCategories] = useState<string[]>();
    const [current, setCurrent] = useState('');

    const dispatch = useAppDispatch();

    const onChoice = (el: string) => {
        setCurrent(el)
    }


    useEffect(() => {
        setCategories(data)
    }, [data])


    useEffect(() => {
        dispatch(setCategory(current));
    }, [current])

    return (
            <ul className={styles.list}>
                <li className={styles.listItem} onClick={() => onChoice('')}>
                    <Button variant={"secondary"} active={'' === current}>Все</Button>
                </li>
                {
                    !isLoading
                        ?
                        categories?.map(
                            (el, index) =>
                                <li className={styles.listItem} onClick={() => onChoice(el)} key={index}>
                                    <Button variant={"secondary"} active={el === current}>{el}</Button>
                                </li>)
                        : <TabsPreloader quantity={5}/>
                }
            </ul>
    );
};

export default Tabs;