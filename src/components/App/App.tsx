import React, {FC} from 'react';
import {Route, Routes} from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../../pages/Home";
import Checkout from "../../pages/Checkout";
import styles from './App.module.scss'

const App: FC = () => {
    return (
        <div className={styles.container}>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path={'/checkout'} element={<Checkout/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export default App;