"use client"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Placeholder from 'react-bootstrap/Placeholder';
import Badge from 'react-bootstrap/Badge';

import { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import LetestNewsFeed from './LetestNewsFeed';

const Home = ({changeContaint}) => {
  const [imagesArr, setImagesArr] = useState([]);
  const [dataload, setDataload] = useState(true)
  const getImages = async () => {
    try {
      let res = await fetch('https://dummyjson.com/products')
      let result = await res.json()
      let data = result.products;
      console.log("result is : ", data)
      setImagesArr(data)
      setDataload(false)
    } catch (err) {
      alert("Connection Faild")
    }
  }

  useEffect( () => {
    getImages()
    console.log(imagesArr)
  }, []);

  return (<>
  
    <Container className='shadow bg-light ' >
      <Row className="justify-content-md-center ">
        <Col xs={12} sm={8} md={8}>
          <h3>
            <Badge bg="success">Momorized Shorts</Badge>
          </h3>
          <Carousel className="shadow p-3 mb-5 bg-white rounded" variant='dark'>
            {dataload ? <>
              <Placeholder as="Carousel.Item" animation="glow">
                <Placeholder xs={12} style={{ height: "10rem" }} />
              </Placeholder>

            </>
              :
              imagesArr.map(item => (
                <Carousel.Item key={item.id}>
                  <img
                    style={{ objectFit: "contain", display: "block", width: "300px", height:"312px", marginLeft: "auto", marginRight: "auto" }}
                    src={item.thumbnail}
                    alt={item.thumbnail}
                  />
                  <Carousel.Caption >
                    <h3 className="dark-Shadow-Font">EventName</h3>
                    <p className="dark-Shadow-Font">Event Date</p>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
          </Carousel>
        </Col>

        <Col md={4} xs={12} sm={4} className="mb-2">
          <Container className='shadow p-3 mb-5 bg-white rounded'>
            <h3>
              <Badge bg="info">Latest News</Badge>
            </h3>
            <LetestNewsFeed />
          </Container>
        </Col>


      </Row>

      <Row>
        <Col>WOrk</Col>
      </Row>
    </Container>

  </>
  )
}

export default Home