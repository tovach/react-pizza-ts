import React, {useEffect, useState} from 'react';
import {useAxios} from "../../hooks/axios";

import styles from './Tabs.module.scss'
import Button from "../UI/Button/Button";
import TabsPreloader from "./TabsPreloader";


const Tabs = () => {
    const url = 'https://my-json-server.typicode.com/tovach/react-pizza-jsonserver/categories';

    const [categories, setCategories] = useState<string[]>();
    const {response, error, loading} = useAxios<string[]>(url);



    console.log('Tabs render')

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
                                <li key={index}>
                                    <Button variant={"secondary"}>{el}</Button>
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