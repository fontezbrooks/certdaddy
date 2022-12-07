import React from 'react';
import '../styles/SideMenu.css';
import OptionHolders from "./buttons/OptionHolders";
import ImageViewer from "./ImageViewer";

export default function Categories() {
    return(
        <div className={'category'}>
            <div className={'imageViewer'}>
                <ImageViewer image={'images/CertDaddyOutline.PNG'}/>
            </div>
            <OptionHolders />
        </div>
    )
}
