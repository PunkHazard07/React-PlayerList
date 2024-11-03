
import Card from 'react-bootstrap/Card';


const Player = (props) => {
    const {name, team, age, nationality, jerseyNumber, imageURL } = props;
return (

    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={imageURL} alt={name} />
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
