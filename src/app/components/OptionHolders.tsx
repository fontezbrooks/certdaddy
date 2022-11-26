import React from 'react';
import '../styles/SideMenu.css';
import HomeButton from "./HomeButton";
import CreatePfxButton from "./CreatePfxButton";
import CreateCsrButton from "./CreateCsrButton";
import InstallCertsButton from "./InstallCertsButton";
import DecodeCsrButton from "./DecodeCsrButton";
import FreeBtcButton from "./FreeBtcButton";
import CombinePubAndPrivButton from "./CombinePubAndPrivButton";

export default function OptionHolders(){
    return(
        <div className={'optionHolders'}>
            <HomeButton/>
            <CreatePfxButton/>
            <CreateCsrButton/>
            <InstallCertsButton/>
            <CombinePubAndPrivButton/>
            <DecodeCsrButton/>
            <FreeBtcButton/>
        </div>
    )
}
