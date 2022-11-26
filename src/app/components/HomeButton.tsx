import React from 'react';
import '../styles/SideMenu.css';

export default function HomeButton() {
    const [isHovered, setIsHovered] = React.useState('homeButton');
    return(
        <div
            className={`${isHovered}`}
            onMouseOver={() => setIsHovered('homeButton-Hovered')}
            onMouseLeave={() => setIsHovered('homeButton')}
        >
            <p className={'homeText'}>
                HOME
            </p>
        </div>
    )
}
