import React from "react";
import scissors from "./assets/scissors.png";
import paper from "./assets/paper.png";
import rock from "./assets/rock.jpg";
import lizard from "./assets/lizard.svg"
import spock from "./assets/spock.svg"

const Player = ({ weapon }) => (
  <>
    <div className="player">
      <img
        className="player-image"
        src={
          weapon === "rock" ? rock : weapon === "scissors" ? scissors : weapon === "paper" ? paper : weapon === "lizard" ? lizard : spock
        }
        alt="Rock Paper Scissors"
      />
    </div>
  </>
);

export default Player;
