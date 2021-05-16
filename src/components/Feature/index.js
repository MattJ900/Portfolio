import React , {useState }from "react"
import Yewnity from '../../images/Yewnity.png'




function Feature () {   
    return (


    <section className="my-work" id="work">
        <h2 className="section__title section__title--work">Feature Projects</h2>
        <p className="section__subtitle section__subtitle--work">Latest Project</p>
    
        <div className="portfolio">
            {/* <!-- Portfolio Image 0 --> */}
            
        <div className="portfolio__item2">    
            <div className="">
            <a href="https://warm-shore-45541.herokuapp.com/">Yewnity</a><br></br> 
            <a href="https://github.com/Sharon1106/Yewnity">Github Repo</a>
            </div>
                <img src={Yewnity} alt="List of Repo Photos" className="portfolio__img"></img>
            </div>
            {/* <!-- Portfolio Image 1 --> */}
    
        
        </div>
    </section>
    )


}

export default Feature;