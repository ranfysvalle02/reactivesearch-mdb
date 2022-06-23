import * as React from "react";
import { Button, Card, CardBody, CardGroup, CardImg, CardSubtitle, CardText, CardTitle, Col, Container, Form, FormGroup, FormText, Input, Label, Row } from "reactstrap";

import { useAuth } from "../hooks/useAuth";
import axios from 'axios';

function Profile() {
   const { authed, loading, vote, getCustomData } = useAuth();
   const [avatarURL,setAvatarURL] = React.useState("");
   const [cEmail,setCurrentEmail] = React.useState("");

   React.useEffect(() => {
      if(authed){
         getCustomData().then((cd)=>{
            console.log('cd',cd);
            setAvatarURL(cd.avatarURL);
            setCurrentEmail(cd.email);
         })
      }
      // Specify how to clean up after this effect:
      return function cleanup() {

      };
   },[authed]);
   return <div className="home-content">
            <div className="context">
               <div className="area" >
                                    <ul className="circles">
                                          <li></li>
                                          <li></li>
                                          <li></li>
                                          <li></li>
                                          <li></li>
                                          <li></li>
                                          <li></li>
                                          <li></li>
                                          <li></li>
                                          <li></li>
                                    </ul>
                           </div >
            </div>
            <div>
            <Container style={{height:"70vh", overflow:"auto"}}>
               <Row>
                     <Col xs="12" style={{maxWidth:"320px", margin:"0 auto"}}>
                        <Card style={{marginTop:"1em"}}> 
                                 <CardImg
                                    alt=""
                                    src={avatarURL}
                                    top
                                    width="100%"
                                 />
                                 <CardBody>
                                    <CardTitle tag="h5">
                                    {String(cEmail).split("@")[0]}
                                    </CardTitle>
                                    <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h6"
                                    >
                                    {String(cEmail).split("@")[1]}
                                    </CardSubtitle>
                                    <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h6"
                                    >
                                    
                                    </CardSubtitle>
                                    
                                 </CardBody>
                              </Card>
                     </Col>
               </Row>   
            </Container>
                  
               
            </div>
         </div>;
}

export default Profile;
