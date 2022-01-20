import React, {FC} from 'react';
import styles from './Main.module.scss';

interface MainProps {
    children: JSX.Element;
}

const Main:FC<MainProps> = ({children}) => {
    return (
        <main className={styles.wrapper}>
            {children}
        </main>
    );
};

export default Main;