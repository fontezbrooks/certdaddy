import React from 'react';
import '../../styles/SideMenu.css';

export default function CreateCsrButton() {
    const [isHovered, setIsHovered] = React.useState('createCsr');
    return(
        <div
            className={`${isHovered}`}
            onMouseOver={()=> setIsHovered('createCsr-Hovered')}
            onMouseLeave={()=> setIsHovered('createCsr')}
            data-testid={'createCsrButton'}
        >
            <p className={'csrText'}>
                CREATE CSR
            </p>
        </div>
    )
}
