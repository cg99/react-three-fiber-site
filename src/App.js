import './App.scss';
import React from 'react'
import Scene from './components/Scene'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Container, Navbar, Row, Col } from 'react-bootstrap';

const App = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">codegenes.net</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Container className="h-100">
                <Row className="h-100">
                    <Col className="m-auto">
                        <div className="d-flex">
                            Built with
                            <h2 className="ml-2">
                                React Three Fiber
                            </h2>
                        </div>
                        <h3 style={{ fontFamily: 'monospace' }}>3d Model from Blender</h3>
                    </Col>
                    <Col>
                        <Scene />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default App
