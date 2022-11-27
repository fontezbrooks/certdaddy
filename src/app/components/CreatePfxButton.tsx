import React from 'react';
import '../styles/SideMenu.css';

export default function CreatePfxButton() {
    const [isHovered, setIsHovered] = React.useState('createPfx');
    return(
        <div
            className={`${isHovered}`}
            onMouseOver={() => setIsHovered('createPfx-Hovered')}
            onMouseLeave={() => setIsHovered('createPfx')}
            data-testid={'createPfxButton'}
        >
            <p className={'pfxText'}>
                CREATE PFX
            </p>
        </div>
    )
}
