"use client"
import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavScrollExample({ setChangeContaint }) {
    const [activeSession, setActiveSession] = useState();
    useEffect(()=>{
        setActiveSession(sessionStorage.getItem("adminToken"))
    })
    return (
        <Navbar xs={12} sm={12} md={12} bg="primary" variant='dark' expand="lg" className='sticky-top w-100'>
            <Container fluid>
                <Navbar.Brand onClick={() => setChangeContaint("Main")} style={{ cursor: "alias" }}>MyDemoFile</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav 
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px', color: "white" }}
                        navbarScroll
                        defaultActiveKey="Main"
                    >
                        <Nav.Link onClick={() => setChangeContaint("Main")}>Home</Nav.Link>

                        <Nav.Link onClick={() => setChangeContaint("Contact")}>
                            Contact
                        </Nav.Link>
                        {
                            activeSession &&
                            <Nav.Link onClick={() => setChangeContaint("AdminProfile")}>
                                AdminProfile
                            </Nav.Link>
                        }
                        
                        {
                            activeSession ?
                                <Nav.Link onClick={() => {sessionStorage.removeItem("adminToken"); setChangeContaint("Main")}}><font color="yellow">Logout</font></Nav.Link>:
                        <Nav.Link onClick={() => setChangeContaint("Login")}>Login</Nav.Link>
                        }
                    </Nav>
                    {/* <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form> */}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavScrollExample;