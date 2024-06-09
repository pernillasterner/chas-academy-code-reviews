import React from 'react';
import './App.css';
import Navbar1 from "./Navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Patient from "./Patient";
import UnverifiedPatient from "./Unverified-patient";

function App() {
    return (
        <div>
            <Router>
            <Navbar1 />
            <Routes>
                <Route path="/patient" element={<Patient />} />
                <Route path="/unverified" element={<UnverifiedPatient />} />
                <Route path="/signin" element={<UnverifiedPatient />} />
            </Routes>
        </Router>
        </div>
    )
        ;
}

export default App;
