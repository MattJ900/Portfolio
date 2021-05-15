import React , {useState }from "react"
import "./styles.css"
import Hero from "../Hero";
import Autobiography from "../Autobiography";
import Footer from "../Footer";
import Contact from "../Contact";
import Projects from "../Projects";
import Feature from "../Feature";
function Main () {
    return (
        <>
    <Hero></Hero>
  

    <Autobiography></Autobiography>

      
        
    <Contact></Contact>

    <Feature></Feature>
    
    <Projects></Projects>

  
    <Footer></Footer>
    
    </>
    )
    
}

export default Main;