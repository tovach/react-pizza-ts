import React, {FC, useEffect, useState} from 'react';
import {useAxios} from "../../hooks/axios";

import styles from './Tabs.module.scss'
import Button from "../UI/Button/Button";
import TabsPreloader from "./TabsPreloader";


const Tabs: FC = () => {
    const url = 'https://my-json-server.typicode.com/tovach/react-pizza-jsonserver/categories';
    const {response, error, loading} = useAxios<string[]>(url);

    const [categories, setCategories] = useState<string[]>();
    const [active, setActive] = useState('');


    useEffect(() => {
        setCategories(response)
    }, [response])

    const onChoice = (el: string) => {
        setActive(el)
    }

    //TODO: Here useEffect with axios deps[active]

    return (
        <section>
            <ul className={styles.list}>
                <li onClick={() => onChoice('')}>
                    <Button variant={"secondary"} active={'' === active}>Все</Button>
                </li>
                {
                    !loading
                        ?
                        categories?.map(
                            (el, index) =>
                                <li onClick={() => onChoice(el)} key={index}>
                                    <Button variant={"secondary"} active={el === active}>{el}</Button>
                                </li>)
                        : Array(6)
                            .fill(0)
                            .map((el, index) => <TabsPreloader key={index}/>)
                }
            </ul>
        </section>
    );
};

export default Tabs;