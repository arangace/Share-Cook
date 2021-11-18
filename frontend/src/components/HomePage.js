import React from 'react';
import '../components/styles.css'
import { Container, Row, Col, Button } from "react-bootstrap";
export default function HomePage() {

    return (
        <>
            <div class="container" id="home">
                <Container fluid>
                    <Row>
                        <Col><Button type="button" class="btn btn-primary">Primary</Button></Col>
                    </Row>
                </Container>

            </div>
        </>
    );
}