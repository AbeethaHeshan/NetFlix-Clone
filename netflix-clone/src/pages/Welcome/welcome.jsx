import React from "react";
import Button from '@mui/material/Button';
import NetFlixImage from '../../assets/images/netflix.png'
import './welcome.css'
import { Container } from "../../components/common/container/contatiner";
import TextField from '@mui/material/TextField';
import { width } from "@mui/system";


export  const Welcome = () => {
       return(
           <div className="welcome_page">
                <Container className="Welcome_viewport_One" style={{background: 'rgb(0 0 0 / 40%)'}}>
                    <div className="color_dark"></div>
                    <Container className="top"> 
                        <img src={NetFlixImage} width="145" height="40" className="netflixIcon"/>
                        <Button className="signIn" variant="contained"  size="medium" style={{backgroundColor: '#e50914',textTransform: 'none',fontWeight: "bold" }}>Sign in</Button>
                    </Container>

                    <Container className="middle">
                        <div className="title">
                          <h1>Unlimited movies, TV  <br/> shows , and more.</h1>   
                        </div>
                          <h2>Watch anywhere. Cancel anytime.</h2>
                          <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                        
                        <form className="form">
                            <TextField className="Email"
                                
                                id="filled"
                                label="Email address"
                                variant="filled"
                            />
                         
                           <Button variant="contained" size="medium" width="212" className="GetStarted" style={{backgroundColor: '#e50914',textTransform: 'none',fontWeight: "400" , width:"212px" , fontSize:"1.6rem"}}>
                            Get Started
                           </Button>

                        </form>
                         
                    </Container>
                </Container>
           </div>
       );
}