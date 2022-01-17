import React from 'react';
import styles from "./Header.module.scss";
import Logo from "../Logo/Logo";
import OrderCounter from "../OrderCounter/OrderCounter";


const Header = () => {
    return (
        <header className={styles.wrapper}>
            <Logo/>
            <OrderCounter/>
        </header>
    );
};

export default Header;