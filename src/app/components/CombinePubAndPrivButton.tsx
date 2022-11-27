import React from 'react';
import '../styles/SideMenu.css';

export default function CombinePubAndPrivButton() {
    const [isHovered, setIsHovered] = React.useState('importCerts');
    return(
        <div
            className={`${isHovered}`}
            onMouseOver={() => setIsHovered('importCerts-Hovered')}
            onMouseLeave={() => setIsHovered('importCerts')}
            data-testId={'combinePubAndPrivButton'}
        >
            <p className={'combineText'}>
                COMBINE PUBLIC AND PRIVATE KEY
            </p>
        </div>
    )
}
