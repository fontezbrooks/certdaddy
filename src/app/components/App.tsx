import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from "./Home";
import '../styles/Main.css';
import SideMenu from "./SideMenu";

export default function App() {
    return(
        <div className={'decor'}>
            <SideMenu/>
            <Home/>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </div>

    )
}
