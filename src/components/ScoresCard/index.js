import React from 'react';
import Card from 'react-bootstrap/Card';

const ScoresCard = () => {
    return (
        <Card border="secondary">
            <Card.Body>
                <Card.Title>
                    <img className="mr-1" src="https://a1.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/scoreboard/orl.png&h=70&w=70" alt="Orlando Magic Logo" style={{ maxWidth:"35px"}}/>
                    Magic
                </Card.Title>
                <Card.Title>
                    <img className="mr-1" src="https://a1.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/scoreboard/cle.png&h=70&w=70" alt="Orlando Magic Logo" style={{ maxWidth:"35px"}}/>
                    Cavaliers
                </Card.Title>
            </Card.Body>
        </Card>
    );
}

export default ScoresCard;