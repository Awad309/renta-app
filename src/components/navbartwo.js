import { Component } from "react"
import "./navbartwo.css";
import theImageone from "../images/Rectangle 2.png"
import theImagenavone from "../images/Rectangle 38.png"
import theImagenavtwo from "../images/Rectangle 37.png"
import theImagenavthree from "../images/Rectangle 36.png"
class Navbartwo extends Component{
render(){
    return(
        <nav className="navbar">
          <img src={theImageone} className="imageone" alt=""/>
          <h2 className="logo">Rent<spsn className="comlogo">ing</spsn></h2>
          <input className="loc-search" placeholder="location"></input>
          <i class="fa-solid fa-magnifying-glass-location"></i>
          <input className="car-search" placeholder="finde cars to rent"></input>
          <i class="fa-sharp fa-solid fa-car"></i>
          <img src={theImagenavone} className="theImagenavone" alt=""/>
          <img src={theImagenavtwo} className="theImagenavtwo" alt=""/>
          <img src={theImagenavthree} className="theImagenavthree" alt=""/>

          <button className="but-two">Add Car</button>
  </nav>
    )
}
}

export default Navbartwo;