import "./addcar.css"
import Navbarthree from "../components/navbarthree"
import imagepic from "../images/Rectangle 71.png"
import imagephoto from "../images/Rectangle 92.png"

const Addcar = () => {
  return (
   <>
   <Navbarthree />

   <h1>Post Your ad</h1>

   <div className="parent">
      <div className="child">
        <h5>Cars For Rent</h5>
      </div>
      <div className="child-one">
        <h2>Include Some Details</h2>
        <h3>Add Title</h3>
        <input className="add-title"></input>
        <p>List the main features of your item (eg brand model, type)</p>
          <h2>Transmission Type</h2>
                <input  id="automat" type="checkbox" name="Automatic" value="automatic" />
                <label for="automat">Automatic</label>
                <input className="manual" id="manual" type="checkbox" name="Manual" value="Manual" />
                <label for="manual">Manual</label>
                <h2>Rental Option</h2>
                <input  id="daily" type="checkbox" name="daily" value="daily" />
                <label for="daily">Daily</label>
                <input className="monthly" id="monthly" type="checkbox" name="monthly" value="monthly" />
                <label for="monthly">Monthly</label>
                <input className="yearly" id="yearly" type="checkbox" name="yearly" value="yearly" />
                <label for="yearly">Yearly</label>
                <h2>Rental Option</h2>
                <input  id="withdrive" type="checkbox" name="withdrive" value="withdrive" />
                <label for="withdrive">With Drive</label>
                <input className="withoutdrive" id="withoutdrive" type="checkbox" name="withoutdrive" value="withoutdrive" />
                <label for="withoutdrive">Without Drive</label>
                <h2>Body Type</h2>
                <input className="body-type"></input>
                <h2>Kilometers</h2>
                <input className="kilo-meters"></input>
                <h2>Fuel Type</h2>
                <input  id="benzine" type="checkbox" name="benzine" value="benzine" />
                <label for="benzine">Benzine</label>
                <input className="diesel" id="diesel" type="checkbox" name="diesel" value="diesel" />
                <label for="diesel">Diesel</label>
                <input className="electric" id="electric" type="checkbox" name="electric" value="electric" />
                <label for="electric">Electric</label>
                <h2>Description</h2>
                <input className="Description"></input>
                <p>Include the condirion, features and reason for the rental</p>
                <div className="child-two">
                  <h2>Set a price</h2>
                  <input className="egp"></input> 
                  <input  id="Negotiable" type="checkbox" name="Negotiable" value="Negotiable" />
                  <label for="Negotiable">Negotiable</label>

                </div>
                <div className="child-three">
                  <h3>Upload up to 10 photos</h3>
                  
                    <button className="image-chose"> <img src={imagephoto} className="imagephoto" alt=""/></button>
                  {/* <img src={imagephoto} className="imagephoto" alt=""/>  */}
                  
                  {/* <input className="photo" id="photo" type="file" name="photo" value="" /> */}

                </div>
                <div className="child-four">
                  <h3>Your Ad's Location</h3>
                  <input className="yourads"></input>
                </div>
                <div className="child-five">
                  <h3>Review your details</h3>
                  <img src={imagepic} className="image-pic" alt=""/>
                    <label className="pic-name">Name</label>
                    <input className="pic-text"></input>
                    <h3>Mobile Phone Number</h3>
                    <input className="mobile-number" type="number" placeholder="Phone Number"></input>
                    <h3>Contact Method</h3>
                    <input  id="PhotoNumber" type="checkbox" name="PhotoNumber" value="PhotoNumber" />
                    <label for="PhotoNumber">Photo Number</label>
                    <input className="RentingChat" id="RentingChat" type="checkbox" name="RentingChat" value="RentingChat" />
                    <label for="RentingChat">Renting Chat</label>
                    <input className="Both" id="Both" type="checkbox" name="Both" value="Both" />
                    <label for="Both">Both</label>
                    <div className="child-six">
                      <button className="post-now">Post Now</button>
                    </div>
                </div>
      </div>
   </div>

   </>
   );
}

export default Addcar;