import React, { useState, useEffect } from "react";
import Player from "./player";

import rock from "./assets/icon-rock.svg";
import paper from "./assets/icon-paper.svg";
import scissors from "./assets/icon-scissors.svg";
import lizard from "./assets/icon-lizard.svg";
import spock from "./assets/icon-spock.svg";

const weapons = [rock, paper, scissors];
const players = ["rock", "paper", "scissors"];
const App = () => {
  const [score, setScore] = useState(0);
  const [playerOne, setPlayerOne] = useState("");
  const [playerTwo, setPlayerTwo] = useState("");
  const [winner, setWinner] = useState("");

  useEffect(() => {
    startgame();
  }, [playerOne]);

  const selectWinner = () => {
    if (playerOne === playerTwo) {
      setWinner("A TIE");
      return "It's a Tie!";
    } else if (
      (playerOne === "rock" && playerTwo === "scissors") ||
      (playerOne === "rock" && playerTwo === "lizard") ||
      (playerOne === "paper" && playerTwo === "rock") ||
      (playerOne === "paper" && playerTwo === "spock") ||
      (playerOne === "scissors" && playerTwo === "paper") ||
      (playerOne === "scissors" && playerTwo === "lizard") ||
      (playerOne === "spock" && playerTwo === "scissors") ||
      (playerOne === "spock" && playerTwo === "rock") ||
      (playerOne === "lizard" && playerTwo === "paper") ||
      (playerOne === "lizard" && playerTwo === "spock")
    ) {
      setScore(score + 1);
      setWinner("You Win");
      return "Player One Wins!";
    } else {
      setScore(score - 1);
      setWinner("You Loose");
      return "Player Two Wins!";
    }
  };

  const startgame = () => {
    let counter = 0;
    let gameInterval = setInterval(() => {
      counter++;
      setPlayerTwo(players[Math.floor(Math.random() * players.length)]);
      if (counter > 9) {
        clearInterval(gameInterval);
        console.log(playerOne);
        console.log(playerTwo);
        selectWinner();
      }
    }, 100);
  };

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
          <span className="points">{score}</span>
        </div>
      </div>

      <button id="rules">Rules</button>

      <div className={playerOne === "" ? "selection" : "hidden"}>
        <div className="option paper" onClick={() => setPlayerOne("paper")}>
          <img src={paper} alt="icon" />
        </div>
        <div
          className="option scissors"
          onClick={() => setPlayerOne("scissors")}
        >
          <img src={scissors} alt="icon" />
        </div>
        <div className="option rock" onClick={() => setPlayerOne("rock")}>
          <img src={rock} alt="icon" />
        </div>
      </div>

      <div className={playerOne === "" ? "hidden" : "activegame"}>
        <div>
          <h2>You Picked</h2>
          <div id="player">
            <Player weapon={playerOne} />
          </div>
        </div>
        <div>
          <h2>The House Picked</h2>
          <div id="house">
            <Player weapon={playerTwo} />
          </div>
        </div>
      </div>

      <div className="result hiddens">
        <span className="youwin"></span>
        <span className={winner !== "" ? "youwin" : "youwin hidden"}>
          {winner}
        </span>

        <button id="playagain" className="hidden">
          Play Again
        </button>
      </div>
    </>
  );
};

export default App;
