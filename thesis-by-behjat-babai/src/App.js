import React from 'react';
import homepage from './pics/home-page.svg'
import homepagePatient from './pics/home-page-patient.svg'
import './App.css';

function App() {
  return (
      <div className="container">

          <section className="section unverified-patient">
              <h1>Unverified patient</h1>
              <img src={homepage} alt="Landing page start booking"/>
          </section>


          <section className="section verified-patient">
              <h1>Verified patient</h1>
              <img src={homepagePatient} alt="Landing page for members"/>
          </section>

      </div>
  );
}

export default App;
