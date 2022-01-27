import React, {FC, useEffect} from 'react';
import {Route, Routes} from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../../pages/Home/Home";
import Cart from "../../pages/Cart/Cart";
import styles from './App.module.scss'
import {useAppDispatch} from "../../hooks/redux";
import {getTotals} from "../../store/slices/cartSlice";

const App: FC = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getTotals());
    }, [])

    return (
        <div className={styles.container}>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path={'/cart'} element={<Cart/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export default App;