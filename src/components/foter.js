import { Component } from "react"
import "./foter.css";


class Foter extends Component{
  render(){
      return(
    //     <section class="footer">
    //     <div>
    //         <h4>INFO</h4>
    //             <p class="inf1">format</p>
    //             <p class="inf2">compression</p>
    //             <p class="inf3">pricing</p>
    //             <p class="inf4">FAQ</p>
    //             <p class="inf5">status</p>
    //     </div>
    //     <div>
    //         <h5>RESOURCES</h5>
    //         <p class="pot1">Developer API</p>
    //         <p class="pot2">Tools</p>
    //         <p class="pot3">Blog</p>
    //     </div>
    //     <div>
    //         <h6>company</h6>
    //         <p class="cam1">About Us</p>
    //         <p class="cam2">Sustainability</p>
    //         <p class="cam3">Term of Service</p>
    //         <p class="cam4">Privacy</p>
    //     </div>
    // </section>     
    <div className="footer">
      <div className="info">
      <ul>
        <li>INFO</li>
        <li>Format</li>
        <li>Compression</li>
        <li>Pricing</li>
        <li>FAQ</li>
        <li>Status</li>
      </ul>
      </div>
      <div className="info-two">
      <ul>
        <li>RESOURCES</li>
        <li>Develober API</li>
        <li>Tools</li>
        <li>Blog</li>
      </ul>
      </div>
      <div className="info-three">
      <ul>
        <li>COMPANY</li>
        <li>About Us</li>
        <li>Sustainability</li>
        <li>Terms of Service</li>
        <li>Privacy</li>
      </ul>
      </div>
    </div>
    
      )
  }
  }
  
  export default Foter; 