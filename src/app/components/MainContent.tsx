import React, {ReactComponentElement} from 'react';
import '../styles/SideMenu.css';

interface Props {
    component: ReactComponentElement<any>;
}
export default function MainContent({component}: Props) {
    return(
        <div className={'mainContent'}>
            {component}
        </div>
    )
}
