import { Component } from "react"
import "./navbarthree.css";
import theImageone from "../images/Rectangle 2.png"

class Navbarthree extends Component{
render(){
    return(
        <nav className="navbar">
          <img src={theImageone} className="imageone-two" alt=""/>
          <h2 className="logo">Rent<spsn className="comlogo">ing</spsn></h2>
        
  </nav>
    )
}
}

export default Navbarthree;