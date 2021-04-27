import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ScoresCard from '../ScoresCard';

const ScoresRow = () => {
    return (
        <Container>
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