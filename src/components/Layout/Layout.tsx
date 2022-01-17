import React, {FC} from 'react';
import {Outlet} from "react-router-dom";

import style from './Layout.module.scss'
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


const Layout: FC = () => {
    return (
        <>
            <Header/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </>
    );
};

export default Layout;