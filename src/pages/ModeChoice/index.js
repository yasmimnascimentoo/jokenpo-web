import React from "react";
import { Link } from "react-router-dom";
import logoZenvia from "../../images/zenvia-logo.png";

import "./styles.css";

const ModeChoice = () => {
  return (
    <div className="choice-player-container">
      <header className="choice-player-header">
        <h1>
          <span>PEDRA</span>
          <span>PAPEL</span>
          <span>TESOURA</span>
        </h1>
        <div className="logo-zenvia">
          <span>
            <img
              className="img-logoZenvia"
              src={logoZenvia}
              alt="Logo ZENVIA"
            />
          </span>
        </div>
      </header>

      <section className="choice-player-section">
        <Link to="/playervsplayer" className="choice-player-option">
          <span>Player 1</span>
          <span>VS</span>
          <span>Player 2</span>
        </Link>
      </section>

      <section className="choice-player-section">
        <Link to="/playervscomputer" className="choice-player-option">
          <span>Player</span>
          <span>VS</span>
          <span>Computer</span>
        </Link>
      </section>

      <footer className="footer">
        <p className="footer-description">DEVELOPED BY YA FOR ZENVIA</p>
      </footer>
    </div>
  );
};

export default ModeChoice;
