import React, {FC} from 'react';
import {Route, Routes} from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../../pages/Home";
import Product from "../../pages/Product";
import Categories from "../../pages/Categories";


const App: FC = () => {
    return (
        <>
            {}
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path={'/product'} element={<Product/>}/>
                    <Route path={'/categories'} element={<Categories/>}/>
                </Route>
            </Routes>

        </>
    );
};

export default App;