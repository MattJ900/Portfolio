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




function Projects () {   
    return (


    <section className="my-work" id="work">
        <h2 className="section__title section__title--work">Showcase Projects</h2>
        <p className="section__subtitle section__subtitle--work">Github Repos & Completed Projects</p>
    
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
    
        <div className="portfolio__item">    
            <div className="">
            <a href="https://mattj900.github.io/Day-Planner/">Day Planner</a><br></br>
            <a href="https://github.com/MattJ900/Day-Planner/">Github Repo</a><br></br>
            </div>
                <img src={Github2} alt="List of Repo Photos" className="portfolio__img"></img>
            </div>

            {/* <!-- Portfolio Image 2 --> */}
            <div className="portfolio__item">
            <div className=""> 
            <a href="https://mattj900.github.io/Code-Refactor/">Code Refactor</a><br></br>
            <a href="https://github.com/MattJ900/Code-Refactor/">Github Repo</a><br></br>
            </div>
                <img src={CodeR} alt="List of Repo Photos" className="portfolio__img"></img>
            </div>
            {/* <!-- Portfolio Image 3 --> */}
            <div className="portfolio__item">
            <div className=""> 
            <a href="https://mattj900.github.io/Weather-DashBoard/">Weather Dashboard</a><br></br>
            <a href="https://github.com/MattJ900/Weather-DashBoard/">Github Repo</a><br></br>
            </div>
                <img src={Weather} alt="List of Repo Photos" className="portfolio__img"></img>
            </div>
            {/* <!-- Portfolio Image 4 --> */}
            <div className="portfolio__item">
            <div className="">
            <a href="https://mattj900.github.io/Code-Quiz/">Code Quiz</a><br></br>
            <a href="https://github.com/MattJ900/Code-Quiz">Github Repo</a><br></br>
            </div>
                <img src={CodeQ} alt="List of Repo Photos" className="portfolio__img"></img>
            </div>
            {/* <!-- Portfolio Image 5 --> */}
            <div className="portfolio__item">
            <div className="">
            <a href="https://aff321.github.io/Main-Project-1/">Geo Gym Tracker</a><br></br>
            <a href="https://github.com/MattJ900/Main-Project-1">Github Repo</a><br></br>
            </div>
                <img src={Project1} alt="List of Repo Photos" className="portfolio__img"></img>
            </div>
            {/* <!-- Portfolio Image 6 --> */}
            <div className="portfolio__item">
            <div className="">
            <a href="https://note-taker-reaper.herokuapp.com/">Note Taker</a><br></br>
            <a href="https://github.com/MattJ900/Note-Taker/">Github Repo</a><br></br>
            </div>
                <img src={Note}alt="List of Repo Photos" className="portfolio__img"></img>
            </div>
            {/* <!-- Portfolio Image 7 --> */}
            <div className="portfolio__item">
            <div className="">
            <a href="https://mighty-peak-23945.herokuapp.com/">Fitness Tracker</a><br></br>
            <a href="https://github.com/MattJ900/Fitness-Tracker/">Github Repo</a><br></br>
            </div>
                <img src={Fitness} alt="List of Repo Photos" className="portfolio__img"></img>
            </div>               
    
        {/* <!-- </a>       --> */}
        </div>
    </section>
    )


}

export default Projects;