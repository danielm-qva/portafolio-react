import React from 'react'
import { Container, Row , Col , Button } from 'react-bootstrap'



export default function Footer() {
  const date = new Date();
  return (
    <footer class="footer mt-auto py-3">
    <Container>
    <Row className="justify-content-md-center mt-4" >
                <Col >
                Copyright {date.getFullYear()}
                 </Col>
                    <Col xs  md='auto'>
                          <Button variant='link' size="lg">
                          <a  href="https://www.linkedin.com/in/daniel-alejandro-mastrapa-jimenez-26659b191/" target="_blank"> 
                                 <ion-icon name="logo-linkedin"></ion-icon>
                                </a>
                          </Button>
                          <Button className='' variant='link' size="lg">
                          <a  href="#" target="_blank"> 
                          <ion-icon name="logo-github"></ion-icon>
                                </a>
                          </Button>
                          <Button variant='link' size="lg">
                          <a href='#' target="_blank"> 
                          <ion-icon name="logo-whatsapp"></ion-icon>
                                </a>
                          </Button>
                    
        
                    </Col>
                    <Col xs lg='2'>
                        </Col>
                </Row>
    </Container>
  </footer>
  )
}
