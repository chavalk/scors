import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ScoresRow = () => {
    return (
        <Container>
            <Row>
                <Col><h1>1</h1></Col>
                <Col><h1>2</h1></Col>
                <Col><h1>3</h1></Col>
                <Col><h1>4</h1></Col>
            </Row>
        </Container>
    );
}

export default ScoresRow;