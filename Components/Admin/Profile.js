"use client"
import { Container, Row, Col, Badge , Nav} from "react-bootstrap"

const Profile = () => {

    if (sessionStorage.getItem("adminToken")) {
        return (
            <>
                <Container fluid>
                    <Row className="justify-content-center">
                        <Col xs={11} sm={4} md={4} className="shadow-lg bg-white m-3 p-3 card" >
                            <div class="card-body text-center">
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
                                    className="rounded-circle img-fluid shadow-lg" style={{ width:"20vh" }} />
                                <h5 className="my-3">Supar User<h6><Badge>Administrator</Badge></h6></h5>
                                <p className="text-muted mb-1">+91 (0)123456789</p>
                                <p className="text-muted mb-4">Example@123.com</p>
                                <div className="d-flex justify-content-center mb-2">
                                    {/* <button type="button" className="btn btn-primary">Edit</button> */}
                                    <button type="button" className="btn btn-outline-primary">Edit Profile</button>
                                </div>
                            </div>
                        </Col>
                        <Col xs={11} sm={7} md={7} className="shadow-lg m-3 p-1 bg-white card">
                            <Nav justify variant="tabs" defaultActiveKey="#home">
                                    <Nav.Link href="#home">Active</Nav.Link>
                                    <Nav.Link eventKey="#link-1"> NavLink</Nav.Link>
                                    <Nav.Link eventKey="#link-2">Link</Nav.Link>
                            </Nav>
                            containt
                        </Col>
                    </Row>
                </Container>
            </>
        )
    } else {
        return (
            <>
                <h1>Sorry Try Again.. :(</h1>
            </>
        )
    }
}

export default Profile