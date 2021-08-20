import React from 'react';
import './AboutUs.css';
import pic_1 from '../images/ubc.png';
import Banner from '../videos/About-Us-Page-B-Roll.mp4';
import MiniBio from './MiniBio';
import instagram from '../images/instagram.svg'
import facebook from '../images/facebook.svg'
import twitter from '../images/twitter.svg'
import cdl from '../images/cdl.png'
import ece from '../images/ece.png'
import dsc from '../images/dsc.png'
import nsc from '../images/nsc.png'
import {Link} from 'react-scroll'
//import alex from '../images/IMG_7051.jpeg'
import eros from '../images/eros.jpg'




function AboutUs() {

    const submitSearch = (e)=>{
        <noscript>
            prevents default event from occurring
            e.g. submitting a form or following a url
        </noscript>
        e.preventDefault();
        alert('Thank you for connecting with us!');
    }

    return (
        <>

            <div className="bannerContainer_ab">
                <div className="gradient_ab"></div>
                <video autoPlay loop muted className="bannerVideo_ab">
                    <source src={Banner} type="video/mp4" />
                </video>

                <h1 className="bannerHeader_ab">about us</h1>
            </div>

            <div className="primary_container_ab">

                <div className="master_container">
                    <div className="main_section">
                        <h3 className="about_us_header">what we do</h3>
                        <div className="text_block">
                            <p className="text_content">
                                We are a consortium of aspiring undergraduate students eager
                                to learn and put our skills towards making the world a little
                                better than it was yesterday. In publishing
                                and graphic design, Lorem ipsum is a placeholder text commonly used
                                to demonstrate the visual form of a document or a typeface without relying
                                on meaningful content. Lorem ipsum may be used as a placeholder before final
                                copy is available.
                                <br />
                                <br />

                                Building blocks was founded by a group of graduate and undergraduate students who
                                 are passionate about improving student health. Every student has their own story,
                                 but we often go through very similar experiences.

                                Students who are struggling often don’t reach out. We would like to solve this problem
                                by creating safe and inclusive student communities where students have access to
                                resources, information, and support.
                            </p>
                        </div>

                    </div>

                    <div className="main_section">
                    <h3 className="about_us_header">Our Partnerships</h3>
                        <div className="text_block">
                            <p className="text_content">
                                We are proud to be partnered with like-minded organizations and 
                                professionals who share the same ambition to improve incoming
                                universtiy students' livelihoods. Our various partnerships allow
                                us to gain access to resources and funding from several departments
                                at UBC. Furthermore, our collaboration with partners 
                                adds to the level of expertise within this project, and enhances
                                well-being and learning experiences for all contributors. <br/> <br/>
                            </p>

                            <p style={{marginTop:"40px", color: 'rgb(239, 196, 27)', fontSize: '30px'}}>
                                <b>Find out more about our partners</b> 
                            </p>
                            </div>
                            <div className="sponsor_box">

                                <div className="sponsor_subbox">
                                <a href="https://blogs.ubc.ca/neuroscienceclub/" target="_blank"><img className="sponsor_image" src={nsc}></img></a>
                                    <a href="https://dsc.community.dev/the-university-of-british-columbia/" target="_blank"><img className="sponsor_image"src={dsc}></img></a>
                                </div>

                                <div className="sponsor_subbox">
                                    <a href="https://ece.ubc.ca/" target="_blank"><img className="sponsor_image" src={ece}></img></a>
                                    <a href="https://www.creativedestructionlab.com/locations/vancouver/" target="_blank"><img className="sponsor_image" src={cdl}></img></a>
                                </div>
                            </div>
                        
                    </div>

                    <div className="main_section">

                        <h3 className="about_us_header">follow us on social media</h3>
                        <div className="social_media">

                        <img className='social_icon' src={instagram} alt='unavailable'></img>
                        <img className='social_icon' src={facebook} alt='unavailable'></img>
                        <img className='social_icon' src={twitter} alt='unavailable'></img>
                        </div>

                        <div className="text_block">

                            
                            <p style={{paddingBottom:"40px", fontSize: '24px', color:"white"}}>
                                <b>Or send us a personal message <br/>
                                We will be in touch with your shortly !</b>
                            
                            </p>
                            
                            <form onSubmit={submitSearch}>
                            <div className="contact_form">

                            
                            <label className="ihatecssevenmore">Name</label>
                            <input className="input_field"  type="text"/><br/>
                            

                        
                            <label className="ihatecssevenmore">Email</label>
                            <input className="input_field" type="text" /><br/>
                        

                            
                            <label className="ihatecss">Your Message</label>
                            <textarea style={{height: '120px'}} className="input_field" type="text"/>
                            <input className="submit_button" type="submit" value="Submit"/>
                            </div>
                            </form>
                            
                        </div>

                    </div>

                </div>
                
                <div className="master_side_container">
                    <h3 className="about_us_header">who we are</h3>
                    
                    <Link to="contact_table" smooth={true} duration={1000} className="section_link"> <p 
                    style={{position: "relative", zIndex: "2", textAlign:"center", color: 'black', 
                            fontSize: '30px', fontFamily: "inherit" }}>
                        <b>Get to know our Developers </b></p></Link>
                    
                    <div className="mini_bio_container">
                        <div className="side_container">
                            <MiniBio name="Alex Lassooij" image={eros}
                                bio="
                            Alex Lassooij is
                            a 2nd year Electrical Engineering
                            Student at UBC and is very passionate
                            about expanding his programming skills" />
                            <MiniBio name="Colin Pereira" image={pic_1}
                                bio="place holder desription" />
                            <MiniBio name="Eros Rodriguez" image={eros}
                                bio="place holder desription" />
                        </div>

                        <div className="side_container">
                            <MiniBio name="Matthew Cai" image={pic_1}
                                bio="place holder desription" />
                            <MiniBio name="Grant Pausanos" image={pic_1}
                                bio="Motivated to do web 
                                development work for Building Blocks" />
                            <MiniBio name="Ricky Lai" image={pic_1}
                                bio="place holder desription" />
                        </div>

                        <div className="side_container">
                            <MiniBio name="Kaiyuan Lang" image={pic_1}
                                bio="place holder desription" />
                        </div>
                    </div>

                    <div id="contact_table">      

                    <table style={{width: "90%", margin: "0 20px 0 80px", textAlign: "center"}}>
                        <tr style={{color: "rgb(239, 196, 27)", fontSize: "25px"}}>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                        </tr>
                        <tr>
                            <td style={{fontWeight: "900"}}>Alex</td>
                            <td><a href="mailto:alex.lassooij@icloud.com">alex.lassooij@icloud.com</a></td>
                            <td><a href="tel:+1 (514)-214-9931">+1 (514)-214-9931</a></td>
                        </tr>
                        <tr>
                            <td style={{fontWeight: "900"}}>Matthew</td>
                            <td><a href="mailto:alex.lassooij@icloud.com">alex.lassooij@icloud.com</a></td>
                            <td><a href="tel:+1 (514)-214-9931">+1 (514)-214-9931</a></td>
                        </tr>
                            <tr>
                            <td style={{fontWeight: "900"}}>Kaiyuan</td>
                            <td><a href="mailto:alex.lassooij@icloud.com">alex.lassooij@icloud.com</a></td>
                            <td><a href="tel:+1 (514)-214-9931">+1 (514)-214-9931</a></td>
                        </tr>
                        <tr>
                            <td style={{fontWeight: "900"}}>Colin</td>
                            <td><a href="mailto:alex.lassooij@icloud.com">alex.lassooij@icloud.com</a></td>
                            <td><a href="tel:+1 (514)-214-9931">+1 (514)-214-9931</a></td>
                        </tr>
                        <tr>
                            <td style={{fontWeight: "900"}}>Grant</td>
                            <td><a href="mailto:alex.lassooij@icloud.com">alex.lassooij@icloud.com</a></td>
                            <td><a href="tel:+1 (514)-214-9931">+1 (514)-214-9931</a></td>
                        </tr>
                        <tr>
                            <td style={{fontWeight: "900"}}>Eros</td>
                            <td><a href="mailto:alex.lassooij@icloud.com">alex.lassooij@icloud.com</a></td>
                            <td><a href="tel:+1 (514)-214-9931">+1 (514)-214-9931</a></td>
                        </tr>
                        <tr>
                            <td style={{fontWeight: "900"}}>Ricky</td>
                            <td><a href="mailto:alex.lassooij@icloud.com">alex.lassooij@icloud.com</a></td>
                            <td><a href="tel:+1 (514)-214-9931">+1 (514)-214-9931</a></td>
                        </tr>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs
