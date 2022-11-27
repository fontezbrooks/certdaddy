import React from 'react';
import '../styles/SideMenu.css';

export default function InstallCertsButton() {
    const [isHovered, setIsHovered] = React.useState('installCerts');
    return(
        <div
            className={`${isHovered}`}
            onMouseOver={() => setIsHovered('installCerts-Hovered')}
            onMouseLeave={() => setIsHovered('installCerts')}
        >
            <p className={'installCertText'}>
                INSTALL CERTS
            </p>

        </div>
    )
}
