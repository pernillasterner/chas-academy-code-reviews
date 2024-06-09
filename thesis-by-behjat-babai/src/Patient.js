import "./App.css";
import homepagePatient from "./pics/home-page-patient.svg";
import React from "react";

function Patient() {
  return (
    <div>
      <h1>Patient</h1>
      <section className="section verified-patient">
        <img src={homepagePatient} alt="Landing page for members" />
      </section>
    </div>
  );
}

export default Patient;
