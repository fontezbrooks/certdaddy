import React from 'react';
import '../../styles/SideMenu.css';

export default function FreeBtcButton() {
    const [isHovered, setIsHovered] = React.useState('freeBtc');
    return(
        <div
            className={`${isHovered}`}
            onMouseOver={() => setIsHovered('freeBtc-Hovered')}
            onMouseLeave={() => setIsHovered('freeBtc')}
        >

        </div>
    )
}
