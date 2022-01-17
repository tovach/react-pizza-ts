import React, {FC} from 'react';
import {Outlet} from "react-router-dom";
import Logo from "../Logo/Logo";


const Layout: FC = () => {
    return (
        <>
            <header>
                <Logo/>
            </header>
            <main>
                <Outlet/>
            </main>
            <footer>footer</footer>
        </>
    );
};

export default Layout;