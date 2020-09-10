import React from "react";
import Player from "./player";

const BonusPlay = ({startBonusGame, selectBonusWinner, selectWeapon, updateCom, playerOne, playerTwo, winner}) => {
  return (
    <div className="container">
      <span className="title">Rock, Paper, Scissors, Lizard, Spock Bonus Game Play</span>
      <div className="switch_mode" onClick={() => updateCom('original')}>Original Play</div>

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
        <button
          className="weaponBtn"
          onClick={() => selectWeapon("lizard")}
        >
          Lizard
        </button>
        <button
          className="weaponBtn"
          onClick={() => selectWeapon("spock")}
        >
          Spock
        </button>
      </div>
      <div className="winner">{winner ? selectBonusWinner() : null}</div>
      <button type="button" onClick={startBonusGame}>
      Start Game!
      </button>
    </div>
  );
}

export default BonusPlay




// class BonusPlay extends Component {
//   state = {
//     playerOne: weapons[0],
//     playerTwo: weapons[0],
//     winner: ""
//   };

  // startBonusGame = () => {
  //   let counter = 0;
  //   let gameInterval = setInterval(() => {
  //     counter++;
  //     this.setState({
  //       playerTwo: weapons[Math.floor(Math.random() * weapons.length)],
  //       winner: "",
  //     });
  //     if (counter > 9) {
  //       clearInterval(gameInterval);
  //       this.setState({
  //         winner: selectBonusWinner(),
  //       });
  //     }
  //   }, 100);
  // };

  // selectBonusWinner = () => {
  //   const { playerOne, playerTwo } = this.state;

  //   if (playerOne === playerTwo) {
  //     return "It's a Tie!";
  //   } else if (
  //     (playerOne === "rock" && playerTwo === "scissors") ||
  //     (playerOne === "rock" && playerTwo === "lizard") ||
  //     (playerOne === "paper" && playerTwo === "rock") ||
  //     (playerOne === "paper" && playerTwo === "spock") ||
  //     (playerOne === "scissors" && playerTwo === "paper") ||
  //     (playerOne === "scissors" && playerTwo === "lizard") ||
  //     (playerOne === "spock" && playerTwo === "scissors") ||
  //     (playerOne === "spock" && playerTwo === "rock") ||
  //     (playerOne === "lizard" && playerTwo === "paper") ||
  //     (playerOne === "lizard" && playerTwo === "spock")
  //   ) {
  //     return "Player One Wins!";
  //   } else {
  //     return "Player Two Wins!";
  //   }
  // };

  // selectWeapon = (weapon) => {
  //   this.setState({
  //     playerOne: weapon,
  //     winner: "",
  //   });
  // };

  // render() {
  //   const { playerOne, playerTwo, winner } = this.state;
    
    // return (
    //   <div className="container">
    //     <span className="title">Rock, Paper, Scissors, Lizard, Spock Bonus Game Play</span>
    //     <div className="switch_mode" onClick={() => this.props.updateCom('original')}>Original Play</div>

    //     <div className="player_bg">
    //       <Player weapon={playerOne} />
    //       <Player weapon={playerTwo} />
    //     </div>
    //     <div className="weapons">
    //       <button
    //         className="weaponBtn"
    //         onClick={() => selectWeapon("rock")}
    //       >
    //         rock
    //       </button>
    //       <button
    //         className="weaponBtn"
    //         onClick={() => selectWeapon("paper")}
    //       >
    //         paper
    //       </button>
    //       <button
    //         className="weaponBtn"
    //         onClick={() => selectWeapon("scissors")}
    //       >
    //         scissor
    //       </button>
    //       <button
    //         className="weaponBtn"
    //         onClick={() => selectWeapon("lizard")}
    //       >
    //         Lizard
    //       </button>
    //       <button
    //         className="weaponBtn"
    //         onClick={() => selectWeapon("spock")}
    //       >
    //         Spock
    //       </button>
    //     </div>
    //     <div className="winner">{winner ? selectBonusWinner() : null}</div>
    //     <button type="button" onClick={startBonusGame}>
    //     Start Game!
    //     </button>
    //   </div>
    // );
//   }
// }

// export default BonusPlay;
