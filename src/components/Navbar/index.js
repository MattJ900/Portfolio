import React , {useState }from "react"
import "./styles.css"
function Navbar () {

const [toggle,settoggle]=useState(false)
    return (
        <header className ={toggle ? "nav-open":""} >
        
        <button className="nav-toggle" onClick={()=>settoggle(!toggle)} aria-label="toggle navigtion">
            <span className="hamburger"></span>
        </button>
        <nav className="nav">
            <ul className="nav__list">
                <li className="nav__item"><a href="#home" onClick={()=>settoggle(false)} className="nav__link">Home</a></li>
                <li className="nav__item"><a href="#about" onClick={()=>settoggle(false)} className="nav__link">Autobiography</a></li>
                <li className="nav__item"><a href="#services" onClick={()=>settoggle(false)} className="nav__link">Contact Information</a></li>
                <li className="nav__item"><a href="#work" onClick={()=>settoggle(false)} className="nav__link">Current Projects</a></li>
            </ul>
        </nav>
    </header>

    )
}
export default Navbar;