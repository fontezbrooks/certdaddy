import React from 'react';
import '../../styles/Main.css';
import MainContent from "../MainContent";

export default function HomeView() {
    return(
        <div className={'mainContent'}>
            <div className={'container'}>
                <div className={'dynamicIsland'}/>
                <div>
                    <MainContent/>
                </div>
            </div>
        </div>
    )
}
