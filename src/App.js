import React from "react";
import Player from "./player";

const App = ({startGame, selectWinner, selectWeapon, updateCom, playerOne, playerTwo, winner}) => {
  return (
    <div className="container">
      <span className="title">Rock Paper Scissors Original Game Play</span>
      <div className="switch_mode" onClick={() => updateCom('bonus')}>Bonus play</div>

      <div className="player_bg">
        <Player weapon={playerOne} />
        <Player weapon={playerTwo} />
      </div>
      <div className="weapons">
        <button
          className="weaponBtn"
          onClick={() => selectWeapon("rock")}
        >
          rock
        </button>
        <button
          className="weaponBtn"
          onClick={() => selectWeapon("paper")}
        >
          paper
        </button>
        <button
          className="weaponBtn"
          onClick={() => selectWeapon("scissors")}
        >
          scissor
        </button>
      </div>
      <div className="winner">{winner ? selectWinner() : null}</div>
      <button type="button" onClick={() => startGame()}>
        Start Game!
      </button>
    </div>
  );
}

export default App
