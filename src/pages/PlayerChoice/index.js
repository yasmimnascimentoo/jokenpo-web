import React, { useState, useCallback, useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import api from "../../services/api";

import logoZenvia from "../../images/zenvia-logo.png";
import iconPaper from "../../images/icon-paper.svg";
import iconScissors from "../../images/icon-scissors.svg";
import iconRock from "../../images/icon-rock.svg";

import "./styles.css";

const PlayerChoice = () => {
  const { pathname } = useLocation();
  const [data, setData] = useState();
  const [plays, setPlays] = useState([]);

  const handlerOnClick = useCallback(
    (play) => {
      setPlays([...plays, play]);
    },
    [plays]
  );

  const onSubmit = useCallback(async () => {
    if (pathname === "/playervsplayer") {
      try {
        const { data } = await api.get(
          `/jokenpo/?plays=${plays[0]}&play2=${plays[1]}`
        );
        setData(data);
      } catch (e) {}
    }
    if (pathname === "/playervscomputer") {
      try {
        const { data } = await api.get(`jokenpo/?plays=${plays[0]}`);
        setData(data);
      } catch (e) {}
    }
  }, [pathname, plays]);

  useEffect(() => {
    if (plays.length >= 2 && pathname === "/playervsplayer") {
      onSubmit();
    }
    if (plays.length >= 1 && pathname === "/playervscomputer") {
      onSubmit();
    }
  }, [plays, onSubmit, pathname]);

  const actionPlayer = useMemo(() => {
    if (pathname === "/playervscomputer") return "Player One";
    if (pathname === "/playervsplayer")
      return plays.length === 0 ? "Player One" : "Player Two";
  }, [pathname, plays]);

  const handlerReset = useCallback(() => {
    setPlays([]);
    setData(undefined);
  }, []);

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

      <h2 className="player">{actionPlayer}</h2>

      <main id="main">
        <button
          disabled={data}
          onClick={() => handlerOnClick("papel")}
          className="btnGeneral"
        >
          <span>
            <img className="icon-paper" src={iconPaper} alt="Icon Paper" />
          </span>
        </button>
        <button
          disabled={data}
          onClick={() => handlerOnClick("tesoura")}
          className="btnGeneral"
        >
          <span>
            <img
              className="icon-scissors"
              src={iconScissors}
              alt="Icon Scissors"
            />
          </span>
        </button>
        <button
          disabled={data}
          onClick={() => handlerOnClick("pedra")}
          className="btnGeneral"
        >
          <span>
            <img className="icon-rock" src={iconRock} alt="Icon Rock" />
          </span>
        </button>
      </main>
      {data ? (
        <div className="choice-player-result">
          <p className="champion-player" style={{ color: "white" }}>
            {data?.message.champion}
          </p>
          <button
            className="btnReset"
            id="clear"
            onClick={() => handlerReset()}
          >
            Jogar Novamente
          </button>
        </div>
      ) : null}

      <footer className="footer">
        <p className="footer-description">DEVELOPED BY YA FOR ZENVIA</p>
      </footer>
    </div>
  );
};

export default PlayerChoice;
