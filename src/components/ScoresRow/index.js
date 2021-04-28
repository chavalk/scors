import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ScoresCard from '../ScoresCard';
import CurrentDate from '../CurrentDate';
import './style.css';

const ScoresRow = (props) => {
    return (
        <Container className="mt-3">
            <h3 className="mr-3">{props.league}</h3>
            <CurrentDate />
            <Row>
                <Col md={3}>
                    <ScoresCard
                        awayLogo="https://a1.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/scoreboard/orl.png&h=70&w=70"
                        awayTeam="Magic"
                        homeLogo="https://a1.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/scoreboard/cle.png&h=70&w=70"
                        homeTeam="Cavaliers"
                    />
                </Col>
                <Col md={3}>
                    <ScoresCard
                        awayLogo="https://a1.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/scoreboard/atl.png&h=70&w=70"
                        awayTeam="Hawks"
                        homeLogo="https://a1.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/scoreboard/phi.png&h=70&w=70"
                        homeTeam="76ers"
                    />
                </Col>
                <Col md={3}>
                    <ScoresCard
                        awayLogo="https://a1.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/scoreboard/lal.png&h=70&w=70"
                        awayTeam="Lakers"
                        homeLogo="https://a1.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/scoreboard/wsh.png&h=70&w=70"
                        homeTeam="Wizards"
                    />
                    </Col>
                <Col md={3}>
                    <ScoresCard
                        awayLogo="https://a1.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/scoreboard/cha.png&h=70&w=70"
                        awayTeam="Hornets"
                        homeLogo="https://a1.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/scoreboard/bos.png&h=70&w=70"
                        homeTeam="Celtics"
                    />
                </Col>
            </Row>
        </Container>
    );
}

export default ScoresRow;