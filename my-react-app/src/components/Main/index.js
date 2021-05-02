import React , {useState }from "react"
import "./styles.css"
import Hero from "../Hero";
import Autobiography from "../Autobiography";
import Footer from "../Footer";
function Main () {
    return (
        <>
    <Hero></Hero>
  

    {/* <!--my services--> */}

    <Autobiography></Autobiography>

        {/* <!-- About me--> */}
     
        
    <section className="about-me" id="about">
        <h2 className="section__title section_title--about">Contact Information</h2>
        <p className="section_subtitle section__subtitle--about">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos reiciendis expedita maxime inventore quidem at quo quibusdam suscipit! Excepturi quasi repellat ex rem molestiae ea atque alias qui corrupti dolores.</p>

        <div className="about-me__body">
            <p>Address: 1837 N. Alexandria Ave. Unit #111</p>
            <p>Los Angeles, CA 90027</p>
            <p>Phone: (323) 706-2308 | Email: MattJ900@outlook.com</p>
        </div>

        <img src="./images/USMC.png" alt="About me" className="about-me__img"></img>
    </section>

    
    <section className="my-work" id="work">
        <h2 className="section__title section__title--work">Current Projects</h2>
        <p className="section__subtitle section__subtitle--work">Github Repos & Projects</p>
    
        <div className="portfolio">
            {/* <!-- Portfolio Image 0 --> */}
            
        <div className="portfolio__item">    
            <div className="">
            <a href="https://warm-shore-45541.herokuapp.com/">Virtual Theme Park</a><br></br> 
            <a href="https://github.com/MattJ900/virtual-theme-park/">Github Repo</a>
            </div>
                <img src="./images/vt.png" alt="List of Repo Photos" className="portfolio__img"></img>
            </div>
            {/* <!-- Portfolio Image 1 --> */}
    
        <div className="portfolio__item">    
            <div className="">
            <a href="https://mattj900.github.io/Day-Planner/">Day Planner</a><br></br>
            <a href="https://github.com/MattJ900/Day-Planner/">Github Repo</a><br></br>
            </div>
                <img src="./images/Github2.png" alt="List of Repo Photos" className="portfolio__img"></img>
            </div>

            {/* <!-- Portfolio Image 2 --> */}
            <div className="portfolio__item">
            <div className=""> 
            <a href="https://mattj900.github.io/Code-Refactor/">Code Refactor</a><br></br>
            <a href="https://github.com/MattJ900/Code-Refactor/">Github Repo</a><br></br>
            </div>
                <img src="./images/CodeR.png" alt="List of Repo Photos" className="portfolio__img"></img>
            </div>
            {/* <!-- Portfolio Image 3 --> */}
            <div className="portfolio__item">
            <div className=""> 
            <a href="https://mattj900.github.io/Weather-DashBoard/">Weather Dashboard</a><br></br>
            <a href="https://github.com/MattJ900/Weather-DashBoard/">Github Repo</a><br></br>
            </div>
                <img src="./images/Weather.png" alt="List of Repo Photos" className="portfolio__img"></img>
            </div>
            {/* <!-- Portfolio Image 4 --> */}
            <div className="portfolio__item">
            <div className="">
            <a href="https://mattj900.github.io/Code-Quiz/">Code Quiz</a><br></br>
            <a href="https://github.com/MattJ900/Code-Quiz">Github Repo</a><br></br>
            </div>
                <img src="./images/CodeQ.png" alt="List of Repo Photos" className="portfolio__img"></img>
            </div>
            {/* <!-- Portfolio Image 5 --> */}
            <div className="portfolio__item">
            <div className="">
            <a href="https://aff321.github.io/Main-Project-1/">Geo Gym Tracker</a><br></br>
            <a href="https://github.com/MattJ900/Main-Project-1">Github Repo</a><br></br>
            </div>
                <img src="./images/Project-1.png" alt="List of Repo Photos" className="portfolio__img"></img>
            </div>
            {/* <!-- Portfolio Image 6 --> */}
            <div className="portfolio__item">
            <div className="">
            <a href="https://note-taker-reaper.herokuapp.com/">Note Taker</a><br></br>
            <a href="https://github.com/MattJ900/Note-Taker/">Github Repo</a><br></br>
            </div>
                <img src="./images/Note.png" alt="List of Repo Photos" className="portfolio__img"></img>
            </div>
            {/* <!-- Portfolio Image 7 --> */}
            <div className="portfolio__item">
            <div className="">
            <a href="https://mighty-peak-23945.herokuapp.com/">Fitness Tracker</a><br></br>
            <a href="https://github.com/MattJ900/Fitness-Tracker/">Github Repo</a><br></br>
            </div>
                <img src="./images/Fitness.png" alt="List of Repo Photos" className="portfolio__img"></img>
            </div>               
    
        {/* <!-- </a>       --> */}
        </div>
    </section>
     {/* <!-- Footer--> */}
    <Footer></Footer>
    </>
    )
    
}

export default Main;