import React from 'react';
import { createRoot } from 'react-dom/client';
import App from "./components/App";
import {BrowserRouter as Router} from 'react-router-dom';

const container = document.getElementById('renderer')!;

const root = createRoot(container);
root.render(
    <Router>
        <App />
    </Router>
);

