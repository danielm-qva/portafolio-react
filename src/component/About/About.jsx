import React from 'react'

import {Container , Row , Col, Button} from 'react-bootstrap'

export default function About() {
  return (
  <>
  <div className="context-home">
            <Container>
      <h1>Acerca de...</h1>
        <ul>
            <li>
            Graduated in June 2020 at the University of Las Tunas Vladimir ilich Lenin at the Faculty of Technical Science.
            </li>
            <li>
            Caribbean Finalist of the ACM-ICPC (International Competitive Programming Contest) in the years 2016, 2018, 2019 respectively
            </li>
            <li>
            Thesis Title: System for the Management of Internal Client Surveys in CREVER Las Tunas.
            </li>
        </ul>
           <br />
         <h2>Main projects carried out</h2>
        <ul>
            <li> MVP Project, Business Simulator. Development of functionalities in the Backend with Node js and Microservices, Visual Studio Code.</li>
            <li> MVP Project, Business Simulator. Front-end development with Angular, Bootstrap, Visual Studio Code.</li>
            <li> Education Project for Schools. Front-end development with Angular, Visual Studio Code.</li>
            <li>Educaion Project for Schools. Development of an apk with Ionic and Angular, Visual Studio Code.</li>
            <li> Project ancert-backup-center … I develop the Front-end React and Sprit Boot in the Backend.</li>
            <li>in2-our-city-internal project…. Developed the Front-end Anuglar and Sprti Boot in the Backend.</li>
            <li>Delfin Apk Project Powered with Ionic</li>
            <li> ByHours Project Developed on the Front-end with React.</li>
            <li> BitBase project developed in the front-end with Reac.</li>
            <li> Aljazira-retail project banking issues.. front-end with Angular(rxjs , observable..).  </li>
        </ul>
        <br/>
        <h2>Knowledge Acquired:</h2>
              <ul>
                <li>Design and maintenance of databases with PostgreSQL 8.4 – 9.5, MySql, MongoDb technologies.</li>
                <li>React , Angular , Bootstrap</li>
                <li> Node Js , express</li>
                <li> .Net Core , C#  </li>
                <li> Knowledge of the development methodology SCRUM, Xp. </li>
                <li> Knowledge the Ionic </li>
                <li> Knowledge of design and analysis of algorithms and data structures.</li>
                <li> Knowledge about version control tools like Git, GitLab.</li>
                <li> Advanced knowledge in Java, Java Script and C++ programming languages.</li>
                </ul>
       
          <br />         
        <h2>Language Skills</h2>
              <ul>
                <li>Spanish (Mother Tongue)</li>
                <li>English (intermediate level)  </li>
                </ul>
                <Row className="justify-content-md-center mt-4" >
                <Col >
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

        
     </div>
  </>
  )
}
