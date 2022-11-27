import React from 'react';
import '../styles/SideMenu.css';
import SideBar from "./SideBar";
import Categories from "./Catergories";

export default function SideMenu() {
    return(
        <div className={'sideMenu'}>
            <SideBar />
            <Categories />
        </div>
    )
}
