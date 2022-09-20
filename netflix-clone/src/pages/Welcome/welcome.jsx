import React from "react";
import Button from '@mui/material/Button';
import NetFlixImage from '../../assets/images/netflix.png'
import './welcome.css'
import { Container } from "../../components/common/container/contatiner";
import TextField from '@mui/material/TextField';
import TV from '../../assets/images/tv.png'
import Mobile from '../../assets/images/mobile.jpg'


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


                <Container className="Welcome_viewport_Two">

                      
                      <Container className="wrap_Container_Viewport_Two"> 
                        {/* text */}
                        <Container className="view_port_Two_Text">
                             <h1>Enjoy on your TV.</h1>  
                             <h2>Watch on Smart TVs, Playstation, Xbox,<br/> Chromecast, Apple TV, Blu-ray players,<br/> and more.</h2>   
                        </Container>

                         {/* animation */}
                        <Container className="view_port_Two_Animation">
                            <Container className="animation_con">

                                <img src={TV} alt="tv" width="500" />  
                                <video className="setAnimation"  loop="true" autoplay="autoplay" controls="false" muted>
                                    <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" type="video/mp4" />
                                </video>

                            </Container>
                           
                        </Container>
                             
                      </Container>   

                </Container>



                <Container className="Welcome_viewport_Three">

                    <Container className="wrap_Container_Viewport_Two"> 
                                <Container className="Image_Con">
                                    
                                        <img src={Mobile} alt="movile"/>
                                            
                                </Container>

                                <Container className="view_port_Two_Text">
                                         <h1>Download your shows <br/> to watch offline.</h1>
                                         <h2>Save your favorites easily and always have <br/> something to watch.</h2>
                                </Container>

                    </Container>
                </Container>
               
           </div>
       );
}