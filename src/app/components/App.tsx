import React, {useEffect} from 'react';
import { Route, Routes } from 'react-router-dom';
import '../styles/Main.css';
import SideMenu from "./SideMenu";
import HomeView from "./views/HomeView";
import PfxCreationView from "./views/PfxCreationView";
import CsrCreationView from "./views/CsrCreationView";
import ViewForInstallCerts from "./views/ViewForInstallCerts";
import CombineCertsView from "./views/CombineCertsView";
import FreeBtcView from "./views/FreeBtcView";
import DecodeCsrView from "./views/DecodeCsrView";

export default function App() {
    return(
        <div className={'decor'}>
            <nav>
                <SideMenu/>
            </nav>
            <Routes>
                <Route path="/" element={<HomeView/>} />
                <Route path="/createPfx" element={<PfxCreationView />} />
                <Route path="/createCsr" element={<CsrCreationView />} />
                <Route path="/installCerts" element={<ViewForInstallCerts />} />
                <Route path="/combineCerts" element={<CombineCertsView />} />
                <Route path="/decodeCsr" element={<DecodeCsrView />} />
                <Route path="/freeBtc" element={<FreeBtcView />} />
            </Routes>
        </div>
    )
}
