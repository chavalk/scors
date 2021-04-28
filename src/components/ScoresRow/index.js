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
            <h3 className="mr-3">{props.nba}</h3>
            <CurrentDate />
            <Row>
                <Col md={3}>
                    <ScoresCard
                        awayLogo={props.awayLogo1}
                        awayTeam={props.awayTeam1}
                        homeLogo={props.homeLogo1}
                        homeTeam={props.homeTeam1}
                    />
                </Col>
                <Col md={3}>
                    <ScoresCard
                        awayLogo={props.awayLogo2}
                        awayTeam={props.awayTeam2}
                        homeLogo={props.homeLogo2}
                        homeTeam={props.homeTeam2}
                    />
                </Col>
                <Col md={3}>
                    <ScoresCard
                        awayLogo={props.awayLogo3}
                        awayTeam={props.awayTeam3}
                        homeLogo={props.homeLogo3}
                        homeTeam={props.homeTeam3}
                    />
                    </Col>
                <Col md={3}>
                    <ScoresCard
                        awayLogo={props.awayLogo4}
                        awayTeam={props.awayTeam4}
                        homeLogo={props.homeLogo4}
                        homeTeam={props.homeTeam4}
                    />
                </Col>
            </Row>
        </Container>
    );
}

export default ScoresRow;