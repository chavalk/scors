import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ScoresCard from '../ScoresCard';

const ScoresRow = (props) => {
    return (
        <Container>
            <h3>{props.league}</h3>
            <Row>
                <Col><ScoresCard></ScoresCard></Col>
                <Col><ScoresCard></ScoresCard></Col>
                <Col><ScoresCard></ScoresCard></Col>
                <Col><ScoresCard></ScoresCard></Col>
            </Row>
        </Container>
    );
}

export default ScoresRow;