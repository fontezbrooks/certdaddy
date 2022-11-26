import React from 'react';
import '../styles/SideMenu.css';

interface Props {
    image: string;
}

export default function ImageViewer({image}: Props) {
    return(
        <img src={image} alt={'outline'}/>
    )
}
