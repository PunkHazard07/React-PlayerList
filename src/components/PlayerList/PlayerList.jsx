import Player from "../Players/Player"
import players from "../mockData/players"
console.log(players)
const PlayerList = () => {
  return (
    <div>
        {players.map((players, index) => (
    <Player
    key={index}
    imgUrl={players.imageURL}
    name={players.name}
    team={players.team}
    number={players.jerseyNumber}
    age={players.age}
    nationality={players.nationality}
    />
        ))}
    </div>
  )
}

export default PlayerList