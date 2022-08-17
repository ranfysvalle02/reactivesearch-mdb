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
               
            <iframe style={{
                                    width: "100%",
                                    height: "70vh",
                                    background:"#F1F5F4",
                                    border: "none",
                                    borderRadius: "2px",
                                    boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)"
                                 }} src="https://charts.mongodb.com/charts-runkel-bbjup/embed/dashboards?id=0f196545-c986-45c7-86b2-30fb1cc44efd&theme=light&autoRefresh=true&maxDataAge=3600&showTitleAndDesc=true&scalingWidth=scale&scalingHeight=scale"></iframe>                                    
                                 
            </Container>
                  
               
            </div>
         </div>;
}

export default Profile;
