import React from 'react';
import Card from 'react-bootstrap/Card';

const ScoresCard = (props) => {
    return (
        <Card border="secondary">
            <Card.Body>
                <Card.Title>
                    <img className="mr-1" src={props.awayLogo} alt="Logo" style={{ maxWidth:"35px"}}/>
                    {props.awayTeam}
                </Card.Title>
                <Card.Title>
                    <img className="mr-1" src={props.homeLogo} alt="Logo" style={{ maxWidth:"35px"}}/>
                    {props.homeTeam}
                </Card.Title>
            </Card.Body>
        </Card>
    );
}

export default ScoresCard;