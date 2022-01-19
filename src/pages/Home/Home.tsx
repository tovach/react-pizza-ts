import React from 'react';
import Tabs from "../../components/Tabs/Tabs";
import Sort from "../../components/Sort/Sort";

import styles from './Home.module.scss'

const Home = () => {


    return (
        <>
            <section className={styles.header}>
                <Tabs/>
                <Sort/>
            </section>
        </>
    );
};

export default Home;