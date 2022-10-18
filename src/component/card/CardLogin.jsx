import React from 'react'
import { Form  , Button} from 'react-bootstrap'

import {useDispatch } from 'react-redux'
import { login } from '../../store/slices/Loginapp/loginSlice';


import './CardLogin.css'

export default function CardLogin() {
      const dispatch = useDispatch();
   
     const handleSubmit= (event) =>{
      event.preventDefault();
      console.log("dispacht")
      dispatch(login())
     }
   
   const handleChange = (event) => {
       console.log(event.target.value) 
   }
   
  return (
    <div className='context'>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail" >
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(event) => {handleChange(event)}} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(event) => {handleChange(event)}} />
      </Form.Group>

      <p>
        <span className='mr-3'>
           *
          </span>
         Al realizar el login podra contactar con el desarrolador por un chat privado, desarrollado con nodeJs , express y socket.io... los mensajes no se guardaran en ninguna DB y
          estaran codificados.. solo se podra mandar los mensajes a un solo destino "Al desarrollador"...
      </p>
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
    </div>
  )
}
