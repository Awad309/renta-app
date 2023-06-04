import { Component } from "react"
import "./Navbar.css";
import theImageone from "../images/Rectangle 2.png"

class Navbar extends Component{
render(){
    return(
        <nav className="navbar">
          <img src={theImageone} className="imageone" alt=""/>
          <h2 className="logo">Rent<spsn className="comlogo">ing</spsn></h2>
          <input className="loc-search" placeholder="location"></input>
          <i class="fa-solid fa-magnifying-glass-location"></i>
          <input className="car-search" placeholder="finde cars to rent"></input>
          <i class="fa-sharp fa-solid fa-car"></i> 
          <button className="but-one">Sign Up</button>
          <button className="but-two">Log In</button>
  </nav>
    )
}
}

export default Navbar;