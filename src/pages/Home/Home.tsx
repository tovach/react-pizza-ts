import React from 'react';
import Tabs from "../../components/Tabs/Tabs";
import Sort from "../../components/Sort/Sort";

import styles from './Home.module.scss'
import Goods from "../../components/Goods/Goods";

const Home = () => {


    return (
        <>
            <section className={styles.header}>
                <Tabs/>
                <Sort/>
            </section>

            <Goods/>

        </>
    );
};

export default Home;