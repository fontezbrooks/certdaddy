import React from 'react';
import '../../styles/SideMenu.css';
import HomeButton from "./HomeButton";
import CreatePfxButton from "./CreatePfxButton";
import CreateCsrButton from "./CreateCsrButton";
import InstallCertsButton from "./InstallCertsButton";
import DecodeCsrButton from "./DecodeCsrButton";
import FreeBtcButton from "./FreeBtcButton";
import CombinePubAndPrivButton from "./CombinePubAndPrivButton";
import {Link} from "react-router-dom";

export default function OptionHolders() {
    return(
        <div className={'optionHolders'}>
            <Link to={"/"}>
                <HomeButton />
            </Link>
            <Link to={"/createPfx"}>
                <CreatePfxButton />
            </Link>
            <Link to={"/createCsr"}>
                <CreateCsrButton/>
            </Link>
            <Link to={"/installCerts"}>
                <InstallCertsButton/>
            </Link>
            <Link to={"/combineCerts"}>
                <CombinePubAndPrivButton/>
            </Link>
            <Link to={"/decodeCsr"}>
                <DecodeCsrButton/>
            </Link>
            <Link to={"/freeBtc"}>
                <FreeBtcButton/>
            </Link>
        </div>
    )
}
