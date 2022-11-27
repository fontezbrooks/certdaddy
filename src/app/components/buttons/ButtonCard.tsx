import React, {useState} from 'react';
import {Link} from "react-router-dom";

interface Props {
    linkPath: string;
}
export default function ButtonCard({linkPath}: Props) {
    const [onHover, setOnHover] = useState('buttonCards');
    const handleOnHover = () => {
        setOnHover('buttonCards-Hovered');
    }
    const handleLeaveHover = () => {
        setOnHover('buttonCards')
    }
    return(
        <div
            className={onHover}
            onMouseOver={() => handleOnHover()}
            onMouseLeave={() => handleLeaveHover()}
        >
            <Link to={linkPath}>

            </Link>
        </div>
    )
}
