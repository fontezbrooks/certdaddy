import React from 'react';
import '../styles/SideMenu.css';
import SideBar from "./SideBar";
import Categories from "./Catergories";
import ImageViewer from "./ImageViewer";

export default function SideMenu(){
    return(
        <div className={'sideMenu'}>
            <SideBar/>
            <Categories/>
        </div>
    )
}
