
import './App.css';
import homepagePatient from "./pics/home-page-patient.svg";
import React from "react";
import patient from "./Patient";
import homepage from "./pics/home-page.svg";


function UnverifiedPatient() {
    return (
        <div>
            <h1>Unverified</h1>
            <section className="section unverified-patient">
                <img src={homepage} alt="Landing page start booking"/>
            </section>
        </div>
    )
        ;
}

export default UnverifiedPatient;