import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LoginForm from "./lab6";
import Motherboard from "./App";
import VideoCards from "./App";
import Processors from "./App";
import Lab5 from "./App";
import menuItem from "./App";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginForm/>} />
                <Route path="/app" element={<App/>} />
                <Route path="/option1" element={<Motherboard/>} />
                <Route path="/option2" element={<VideoCards/>} />
                <Route path="/option3" element={<Processors/>} />
                <Route path="/option4" element={<Lab5/>} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
