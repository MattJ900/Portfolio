import React , {useState }from "react"
import USMC from '../../images/USMC.png'


function Contact () {   
    return (
    <section className="about-me" id="about">
    <h2 className="section__title section_title--about">Contact Information</h2>
    <p className="section_subtitle section__subtitle--about">I grew up around the NorthEast part of Los Angeles and currently reside in Los Feliz.</p>

    <div className="about-me__body">
        <p>For any job-related inquireres</p>
        <p>the fastest way to reach</p>
        <p>Phone: (323) 706-2308 | Email: MattJ900@outlook.com</p>
    </div>

    <img src={USMC} alt="About me" className="about-me__img"></img>
    </section>
    )
    
}    

export default Contact;