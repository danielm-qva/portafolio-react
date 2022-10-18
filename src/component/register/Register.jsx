import React from 'react'
import { Form  , Button} from 'react-bootstrap'

import './register.css'

export default function Register() {
  return (
    <div className='contex-register'>
    <h1>Register</h1>
    <Form >
    <Form.Group className="mb-3" controlId="formBasicEmail" >
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" onChange={(event) => {handleChange(event)}} />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password"  />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password"  />
    </Form.Group>

    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, 
      dicta, dolorem excepturi voluptatem quasi non culpa voluptatibus pariatur eveniet, 
      impedit dolores libero. Eaque, eius eligendi? Impedit incidunt temporibus quae fugiat.</p>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
  </div>
  )
}
