import React from 'react'
import { Col, Container, Row , Stack } from 'react-bootstrap'


export default function Home() {

  const data= [{
      hola: "Hola",
      "adios" : "adios"
  },
  {
    hola: "Hola",
    "adios" : "adios"
},
{
  hola: "Hola",
  "adios" : "adios"
},
]


  return (
    <>   
     <div className="context-home">
            <Container>
      <h1>Daniel...</h1>
      <p>Ingeniero Informático pasionado por el conocimiento. Desarrollador de software enfocado a resultados en un
         entorno de desarrollo multiplataforma. Habilidades para el trabajo en equipo; 
        escucha activa, respeto, sinceridad, habilidades de comunicación y enfocado a las personas. En mi tiempo libre aprendiz emprendedor!</p>
    
        <h2>Framework:</h2>
           <Row className='mt-4'>
               {
                data.map((res) => {
                  console.log(res);
                  <Col xl md="4">
                  col-1
                </Col>
                })
               }
      
           </Row>
    

            </Container>
 

     </div>
    </>
  )
}
