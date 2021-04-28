import React from 'react';
import Card from 'react-bootstrap/Card';

const ScoresCard = (props) => {
    return (
        <Card border="secondary" className="mb-3">
            <Card.Body>
                <Card.Text>
                    <img className="mr-1" src={props.awayLogo} alt="Logo" style={{ maxWidth:"35px"}}/>
                    {props.awayTeam}
                </Card.Text>
                <Card.Text>
                    <img className="mr-1" src={props.homeLogo} alt="Logo" style={{ maxWidth:"35px"}}/>
                    {props.homeTeam}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default ScoresCard;