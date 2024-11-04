
import Card from 'react-bootstrap/Card';


const Player = ({ name, team, age, nationality, jerseyNumber, imgUrl }) => {
return (

    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={imgUrl || "https://b.fssta.com/uploads/application/soccer/headshots/40670.vresize.350.350.medium.72.png"} alt={name} />
    <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{team}</Card.Text>
        <Card.Text>{age}</Card.Text>
        <Card.Text>{jerseyNumber}</Card.Text>
        <Card.Text>{nationality} </Card.Text>
    </Card.Body>
    </Card>

);
}

export default Player
