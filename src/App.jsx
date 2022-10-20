import React from 'react'
import NavBarApp from './component/navbar/NavBarApp'

import {Routes, Route  } from 'react-router-dom'

import "./App.css"
import { Col, Container, Row, Stack  } from 'react-bootstrap'

//component
import Chat from './component/chat/Chat'
import CardLogin from './component/card/CardLogin'
import CardImg from './component/card-img/CardImg'
import Register from './component/register/Register';
import Home from './component/Home/Home'
import About from './component/About/About'

import {useSelector} from 'react-redux'
import Footer from './component/footer/Footer'

export default function App() {

  const {statusLogin} = useSelector((state) => state.loginApp)

  return (
     <>
        <NavBarApp name="Daniel M. Jimenez"/>
        <Container fluid className='mt-5 p-5' >
          <Row>
           <Col xs={12}  md={8}  >
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
          </Routes>
           </Col>
           <Col xs={6} md={4}>
                <Stack gap={2} className="col-lg-12 mx-auto">
                  {
                    !statusLogin ?  <CardLogin /> : <CardImg/>
                  }
                  {
                     !statusLogin ? <Register/> : <Chat/>

                  }
                </Stack>
           </Col>
          </Row>
          </Container>
          <Footer/>
     </>
  )
}
