"use client"

import Link from "next/link"
import { useState } from "react"
import { Badge, Col, Container, Row } from "react-bootstrap"
import HomeIcon from '@mui/icons-material/Home';
import CallIcon from '@mui/icons-material/Call';


const Footer = () => {

    const [courses, setCourses] = useState(["DCA", "ADCA", "PGDCA"])
    const [resources, setResources] = useState(["Computer", "Student Learning"])
    const [about, setAbout] = useState({
        CompanyName : "CompanyName",
        CompanyContact: "+91 0 123456789",
        CompanyAddress: "211, Jawahar Nagar Rd, Indore, Madhya Pradesh 452012"
    })

    return (
        <>
            <Container  fluid>
                <Row className="bg-dark text-white p-3 ">
                    <Col xs={4} sm={4} md={4} >
                        <h4><Badge className="bg-dark text-info">Courses</Badge></h4>
                        <hr/>
                        {
                            courses.map(item => <>
                                <Link className="badge badge-light" href={'#' + item}> {item} </Link><br />
                            </>
                            )
                        }
                    </Col>
                    <Col xs={4} sm={4} md={4}>

                        
                        <h4><Badge className="bg-dark text-info">Resources</Badge></h4>
                        <hr/>
                        {
                            resources.map(item => <>
                                <Link className="badge badge-light" href={'#' + item}> {item} </Link><br />
                            </>
                            )
                        }
                    </Col>
                    <Col xs={4} sm={4} md={4}>

                        
                        <h4><Badge className="bg-dark text-warning">About Us</Badge></h4>
                        <hr/>
                        {about.CompanyName}<br />
                        <CallIcon/> {about.CompanyContact}<br />
                        <HomeIcon /> {about.CompanyAddress}<br />
                        <Link href="#MoreDetailCompany" className=" text-white" >More Detail</Link>
                           
                    </Col>

                </Row>
            </Container>
        </>
    )
}

export default Footer