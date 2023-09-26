import React, { useEffect, useRef, useState } from "react";

import Header from "./Header.js";
import Player from "./Player.js";
import AddPlayerForm from "./AddPlayerForm.js";


function App() {
  const [players, setPlayers] = useState([
    {
      name: "Guil",
      score: 0,
      id: 1
    },
    {
      name: "Treasure",
      score: 0,
      id: 2
    },
    {
      name: "Ashley",
      score: 0,
      id: 3
    },
    {
      name: "James",
      score: 0,
      id: 4
    }
  ]);

  const playerIdCounter = useRef(5);

  const [heightScore, setHeightScore] = useState(0);

  useEffect(() =>{
    const scores = players.map(player => player.score);
    setHeightScore(Math.max(...scores));
  },[players])

  function scoreChange(Diff, id) {
    setPlayers(prevPlayers => prevPlayers.map(player => {
      if (player.score + Diff >= 0 && player.id === id)
        return {
          name: player.name,
          score: player.score + Diff,
          id: player.id
        }
      else
        return player;
    }))
  }

  function deletePlayer(id) {
    setPlayers(prevPlayers => prevPlayers.filter( player => player.id !== id
    ))
  }

  function HendleAddPlayer(name) {
    setPlayers(prevPlayers => [
      ...prevPlayers,
      {
        name: name,
        score: 0,
        id: playerIdCounter.current
      }
    ])
    playerIdCounter.current = playerIdCounter.current + 1;
  }

  return (
    <div className="scoreboard">
      <Header
        totalPlayers={players.length}
        totalPoints={players.reduce((score, player) => score + player.score, 0)}
        title={"Scoreboard"}
      />
      {
        players.map(player =>
          <Player
            player={player}
            key={player.id}
            scoreChange={scoreChange}
            deletePlayer={deletePlayer}
            isHighScore={player.score === heightScore && heightScore > 0}
          />
        )
      }
      <AddPlayerForm
        HendleAddPlayer={HendleAddPlayer}
      />
    </div>
  );
}

export default App;
