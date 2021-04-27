import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ScoresCard from '../ScoresCard';
import './style.css';

const ScoresRow = (props) => {
    return (
        <Container className="mt-3">
            <h3>{props.league}</h3>
            <Row>
                <Col md={3}><ScoresCard></ScoresCard></Col>
                <Col md={3}><ScoresCard></ScoresCard></Col>
                <Col md={3}><ScoresCard></ScoresCard></Col>
                <Col md={3}><ScoresCard></ScoresCard></Col>
            </Row>
        </Container>
    );
}

export default ScoresRow;