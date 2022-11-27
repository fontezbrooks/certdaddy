import React from 'react';
import '../styles/SideMenu.css';

export default function DecodeCsrButton() {
    const [isHovered, setIsHovered] = React.useState('decodeCsr');
    return(
        <div
            className={`${isHovered}`}
            onMouseOver={() => setIsHovered('decodeCsr-Hovered')}
            onMouseLeave={() => setIsHovered('decodeCsr')}
            data-testid={'decodeCsrButton'}
        >
            <p className={'decodeText'}>
                DECODE CSR
            </p>
        </div>
    )
}
