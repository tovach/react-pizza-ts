import React, {FC, useEffect, useState} from 'react';
import {useAxios} from "../../hooks/axios";

import styles from './Tabs.module.scss'
import Button from "../UI/Button/Button";
import TabsPreloader from "./TabsPreloader";
import {useAppDispatch} from "../../hooks/redux";
import {setCategory} from "../../store/slices/goodsSlice";


const Tabs: FC = () => {
    const url = '/categories';
    const {response, error, loading} = useAxios<string[]>(url);
    const [categories, setCategories] = useState<string[]>();
    const [current, setcurrent] = useState('');

    const dispatch = useAppDispatch();


    useEffect(() => {
        setCategories(response)
    }, [response])

    const onChoice = (el: string) => {
        setcurrent(el)
    }

    useEffect(() => {
        dispatch(setCategory(current));
    }, [current])

    return (
            <ul className={styles.list}>
                <li className={styles.listItem} onClick={() => onChoice('')}>
                    <Button variant={"secondary"} active={'' === current}>Все</Button>
                </li>
                {
                    !loading
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