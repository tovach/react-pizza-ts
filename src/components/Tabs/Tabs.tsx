import React, {useEffect, useState} from 'react';
import {useAxios} from "../../hooks/axios";

import styles from './Tabs.module.scss'
import Button from "../UI/Button/Button";
import TabsPreloader from "./TabsPreloader";


const Tabs = () => {
    const url = 'https://my-json-server.typicode.com/tovach/react-pizza-jsonserver/categories';
    const {response, error, loading} = useAxios<string[]>(url);

    const [categories, setCategories] = useState<string[]>();
    const [active, setActive] = useState('мясная');


    useEffect(() => {
        setCategories(response)
    }, [response])


    return (
        <section>
            <ul className={styles.list}>
                {
                    !loading
                        ? categories?.map(
                            (el, index) =>
                                <li onClick={(e) => {
                                    setActive(el)
                                }} key={index}>
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