import React, {FC, useState} from 'react';
import {ReactComponent as SortIcon} from "./img/sort-icon.svg";

import styles from './Sort.module.scss';

interface SortOption {
    name: string,
    value: string,
    order: string,
}

const Sort: FC = () => {

    const sortVariants: SortOption[] = [
        {name: 'популярности', value: 'rating', order: 'desc'},
        {name: 'цене', value: 'price', order: 'desc'},
        {name: 'названию', value: 'title', order: 'desc'}
    ];

    const [visible, setVisible] = useState(false);
    const [current, setCurrent] = useState<SortOption>(sortVariants[0])


    const onChoice = (el: SortOption) => {
        setVisible(!visible);
        setCurrent(el);
    }

//TODO: Here useEffect with axios deps[current]

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