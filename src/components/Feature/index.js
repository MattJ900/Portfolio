import React , {useState }from "react"
import USMC from '../../images/USMC.png'
import VT from '../../images/vt.png'
import Github2 from '../../images/Github2.png'
import Weather from '../../images/Weather.png'
import CodeQ from '../../images/CodeQ.png'
import CodeR from '../../images/CodeR.png'
import Note from '../../images/Note.png'
import Project1 from '../../images/Project-1.png'
import Fitness from '../../images/Fitness.png'




function Feature () {   
    return (


    <section className="my-work" id="work">
        <h2 className="section__title section__title--work">Feature Projects</h2>
        <p className="section__subtitle section__subtitle--work">Latest Project</p>
    
        <div className="portfolio">
            {/* <!-- Portfolio Image 0 --> */}
            
        <div className="portfolio__item">    
            <div className="">
            <a href="https://warm-shore-45541.herokuapp.com/">Virtual Theme Park</a><br></br> 
            <a href="https://github.com/MattJ900/virtual-theme-park/">Github Repo</a>
            </div>
                <img src={VT} alt="List of Repo Photos" className="portfolio__img"></img>
            </div>
            {/* <!-- Portfolio Image 1 --> */}
    
        
        </div>
    </section>
    )


}

export default Feature;