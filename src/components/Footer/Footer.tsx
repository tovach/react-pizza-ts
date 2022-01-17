import React from 'react';
import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <footer className={styles.wrapper}>
            <p>React Pizza - 2022</p>
            <p>©Archakov Blog</p>
        </footer>
    );
};

export default Footer;