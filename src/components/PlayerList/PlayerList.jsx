import Player from "../Players/Player"
import players from "../mockData/players"

const PlayerList = () => {
  return (
    <div>
        {players.map((players, index) => (
    <Player
    key={index}
    image={players.imageURL}
    name={players.name}
    team={players.team}
    number={players.jerseyNumber}
    Age={players.age}
    nationality={players.nationality}
    />
        ))}
    </div>
  )
}

export default PlayerList