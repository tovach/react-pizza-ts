import React, {FC, useEffect, useState} from 'react';
import {ReactComponent as SortIcon} from "./img/sort-icon.svg";

import styles from './Sort.module.scss';
import {useAppDispatch} from "../../hooks/redux";
import {setSort} from "../../store/slices/goodsSlice";
import {SortOption} from "../../types/interfaces";



const Sort: FC = () => {

    const sortVariants: SortOption[] = [
        {name: 'популярности', value: 'rating', order: 'desc'},
        {name: 'цене', value: 'price', order: 'desc'},
        {name: 'названию', value: 'title', order: 'asc'}
    ];

    const [visible, setVisible] = useState(false);
    const [current, setCurrent] = useState<SortOption>(sortVariants[0])

    const dispatch = useAppDispatch();


    const onChoice = (el: SortOption) => {
        setVisible(!visible);
        setCurrent(el);
    }

    useEffect(() => {
        dispatch(setSort(current));
    }, [current])

    return (
        <div className={styles.wrapper}>
            <p onClick={() => setVisible(!visible)} className={styles.text}>
                <SortIcon className={visible ? styles.rotate : ''}/>Сортировка по: <span
                className={styles.emphased}>{current.name}
            </span>
            </p>

            {visible &&
                <ul className={styles.list}>
                    {sortVariants.map(el =>
                        <li key={el.value} className={styles.item}>
                            <span onClick={() => onChoice(el)} className={styles.option}>{el.name}</span>
                        </li>
                    )}
                </ul>
            }

        </div>
    );
};

export default Sort;