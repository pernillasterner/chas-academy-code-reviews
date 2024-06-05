import "./App.css";
import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <div className="Header">
        <header className="Scania-header">
          <nav className="navbar">
            <div className="left-links">
              <a href="#">SCANIA</a>
              <a href="#">MY SCANIA</a>
            </div>
            <div className="right-links">
              <a href="#">Logga in</a>
              <a href="https://fmp-help.cs.scania.com/#/help/get-started?lang=sv-SE&nationality=NL&referrer=https:%2F%2Fmy.scania.com%2Fhome&signedIn">
                <FontAwesomeIcon icon={faCircleQuestion} />
              </a>
              <a className="logocontainer" href="#">
                <img
                  className="logo"
                  alt="Scania Logo"
                  src="https://static.scania.com/resources/logotype/scania/scania-symbol.svg"
                ></img>
              </a>
            </div>
            <button className="hamburger" onClick={toggleMenu}>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </button>
          </nav>
        </header>
      </div>
      <div className="background-web">
        <img
          className="hidden-background-image"
          alt="Två filig bilväg med skog runtom och molnig himmel"
          src="https://images.unsplash.com/photo-1542569279-510fa9d21270?q=80&w=2755&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ></img>
        <div className="text-container">
          <h2 className="text-i-bild2">Välkommen till My Scania</h2>
          <h1 className="text-i-bild">DIN VÄG IN TILL SCANIA</h1>
          <div className="buttons-container">
            <button className="knapp1">Logga in</button>
            <button className="knapp2">Jag har en inbjudan</button>
          </div>
        </div>
      </div>
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <a href="#">SCANIA</a>
        <a href="#">MY SCANIA</a>
        <a href="#">Logga in</a>
      </div>
      {menuOpen && <div className="overlay show" onClick={toggleMenu}></div>}
    </div>
  );
}

export default App;
