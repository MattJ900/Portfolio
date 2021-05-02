import React , {useState }from "react"
function Hero () {
return (
    <>
  <div className="logo">
  <img src="../../Hero.png"></img> 
</div>
{/* <!-- Intro--> */}
<section className="intro" id="home">
  <h1 className="section__title section__title--intro">
      Matthew A John<strong>Portfolio</strong>
  </h1>
  <p className="section__subtitle section__subtitle--intro ">Full-Stack Developer</p>
  <img src="./images/lion.png" alt="Matthew Photo Military" className="intro__img"></img>
</section>
</>

)}

export default Hero;