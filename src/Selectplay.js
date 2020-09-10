import React, { useState } from "react";
import App from "./App";
import BonusPlay from "./BonusPlay";

const Selectplay = () => {

const weapons = ["rock", "paper", "scissors"];
const bonusweapons = ["rock", "paper", "scissors", "lizard", "spock"];

  const [mode, setMode] = useState("original");
  const [playerOne, setPlayerOne] = useState(weapons[0]);
  const [playerTwo, setPlayerTwo] = useState(weapons[0]);
  const [winner, setWinner] = useState("");

  const updateCom = (param) => {
    setMode(param);
  };

  const startGame = () => {
    let counter = 0;
    let gameInterval = setInterval(() => {
      counter++;
      setPlayerTwo(weapons[Math.floor(Math.random() * weapons.length)]);
      if (counter > 9) {
        clearInterval(gameInterval);
        setWinner(selectWinner);
      }
    }, 100);
  };

  const startBonusGame = () => {
    let counter = 0;
    let gameInterval = setInterval(() => {
      counter++;
      setPlayerTwo(bonusweapons[Math.floor(Math.random() * bonusweapons.length)])
      setWinner("")
      if (counter > 9) {
        clearInterval(gameInterval);
        setWinner(selectBonusWinner)
      }
    }, 100);
  };

  const selectWinner = () => {
    if (playerOne === playerTwo) {
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
      return "Player One Wins!";
    } else {
      return "Player Two Wins!";
    }
  };

  const selectBonusWinner = () => {
    if (playerOne === playerTwo) {
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
      return "Player One Wins!";
    } else {
      return "Player Two Wins!";
    }
  };

  const selectWeapon = (weapon) => {
    setPlayerOne(weapon);
    setWinner("");
  };

  return mode === "original" ? (
    <App
      updateCom={updateCom}
      startGame={startGame}
      playerOne={playerOne}
      playerTwo={playerTwo}
      winner={winner}
      selectWinner={selectWinner}
      selectWeapon={selectWeapon}
    />
  ) : (
    <BonusPlay 
    updateCom={updateCom}
    startBonusGame={startBonusGame}
    playerOne={playerOne}
    playerTwo={playerTwo}
    winner={winner}
    selectBonusWinner={selectBonusWinner}
    selectWeapon={selectWeapon} />
  );
};

export default Selectplay;
