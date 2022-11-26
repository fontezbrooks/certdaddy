import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from "./Home";
import '../styles/Main.css';

export default function App() {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    )
}
