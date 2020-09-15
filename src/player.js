import React from "react";

import rock from "./assets/icon-rock.svg";
import paper from "./assets/icon-paper.svg";
import scissors from "./assets/icon-scissors.svg";
import lizard from "./assets/icon-lizard.svg";
import spock from "./assets/icon-spock.svg";


const Player = ({ weapon }) => (
  <>
      <img
        className="player-image"
        src={
          weapon === "rock" ? rock : weapon === "scissors" ? scissors : weapon === "paper" ? paper : weapon === "lizard" ? lizard : spock
        }
        alt="Rock Paper Scissors"
      />
  </>
);

export default Player;
