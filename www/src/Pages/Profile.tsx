import * as React from "react";
import { Button, Card, CardBody, CardGroup, CardImg, CardSubtitle, CardText, CardTitle, Col, Container, Form, FormGroup, FormText, Input, Label, Row } from "reactstrap";

import { useAuth } from "../hooks/useAuth";
import axios from 'axios';

function Profile() {
   const { authed, loading, vote, getCustomData } = useAuth();
   const [cEmail,setCurrentEmail] = React.useState("");

   let dbURL = "https://charts.mongodb.com/charts-runkel-bbjup/embed/dashboards?id=0f196545-c986-45c7-86b2-30fb1cc44efd&theme=light&autoRefresh=true&maxDataAge=3600&showTitleAndDesc=false&scalingWidth=scale&scalingHeight=scale";
   let chURL = "https://charts.mongodb.com/charts-runkel-bbjup/embed/charts?id=62f80adc-5ed6-473b-81b9-067068b5a03a&maxDataAge=3600&theme=light&autoRefresh=true";
   const [iframeURL,setURL] = React.useState("");
   React.useEffect(() => {
      
      const urlSearchParams = new URLSearchParams(window.location.search);
      const params = Object.fromEntries(urlSearchParams.entries());
      if(urlSearchParams && params.t){
         var d = new Date(params.t); // some mock date
         var ms = d.getTime();
         let filter = "&filter=%7Btime%3A%7B%24gte%3A%7B%24date%3A%22"+String(params.t)+"%22%7D%7D%7D";  
         setURL(chURL+filter);
         console.log('ms',ms);
      }else{
         setURL(dbURL)
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
                                 }} src={iframeURL}></iframe>
            <hr />

            <iframe style={{
                                    display:"none",
                                    width: "100%",
                                    height: "70vh",
                                    background:"#F1F5F4",
                                    border: "none",
                                    borderRadius: "2px",
                                    boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)"
                                 }} src="https://charts.mongodb.com/charts-runkel-bbjup/embed/dashboards?id=0f196545-c986-45c7-86b2-30fb1cc44efd&theme=light&autoRefresh=true&maxDataAge=3600&showTitleAndDesc=false&scalingWidth=scale&scalingHeight=scale"></iframe>                                    
                                 
            </Container>
                  
               
            </div>
         </div>;
}

export default Profile;
