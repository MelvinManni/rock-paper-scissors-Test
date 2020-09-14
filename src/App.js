import React from "react";
import Player from "./player";

import paper from "./assets/icon-paper.svg"
import rock from "./assets/icon-rock.svg"
import scissors from "./assets/icon-scissors.svg"

const App = ({
  startGame,
  selectWinner,
  selectWeapon,
  updateCom,
  playerOne,
  playerTwo,
  winner,
}) => {
  return (
    <>
      <div className="hud">
        <div>
          <p>ROCK</p>
          <p>PAPER</p>
          <p>SCISSOR</p>
        </div>
        <div className="score_container">
          <span className="score">Score</span>
          <span className="points">0</span>
        </div>
      </div>

      <button id="rules">Rules</button>

      <div className="selection">
        <div className="option paper">
          <img src={paper} alt="icon" />
        </div>
        <div className="option scissors">
          <img src={scissors} alt="icon" />
        </div>
        <div className="option rock">
          <img src={rock} alt="icon" />
        </div>
      </div>

      <div className="activegame hidden">
        <div>
          <h2>You Picked</h2>
          <div id="player"></div>
        </div>
        <div>
          <h2>The House Picked</h2>
          <div id="house"></div>
        </div>
      </div>

      <div className="result">
        <span className="youwin hidden">You Win</span>
        <span className="youlose hidden">You Lose</span>

        <button id="playagain" className="hidden">
          Play Again
        </button>
      </div>
    </>
  );
};

export default App;
