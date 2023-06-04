import Navbar from "../components/Navbar";
import Foter from "../components/foter";
import imagebmw from "../images/Rectangle 22.png"
import imagechery from "../images/Rectangle 22 (1).png"
import imagefiat from "../images/Rectangle 22 (2).png"
import imagesou from "../images/Rectangle 22 (3).png"
import imagemarc from "../images/Rectangle 22 (4).png"
import imagetout from "../images/Rectangle 22 (5).png"
import imagenisan from "../images/Rectangle 22 (6).png"
import imagehond from "../images/Rectangle 22 (7).png"
import imagehonda from "../images/Rectangle 22 (8).png"
import imagevolva from "../images/Rectangle 22 (9).png"
import imagevolvo from "../images/Rectangle 22 (10).png"
import imagekia from "../images/Rectangle 22 (11).png"
import imagejeep from "../images/Rectangle 22 (12).png"
import imagerentcar from "../images/Rectangle 27.png"
import imagecounter from "../images/Rectangle 27 (2).png"
import imagelocation from "../images/Rectangle 27 (3).png"
import "./home.css"

const Home = () => {
  return (
   <>
   <Navbar />
      <h2>Browse Categorie</h2>
      <div className="category">
      <img src={imagebmw} className="imagebmw" alt=""/>
      <img src={imagechery} className="imagechery" alt=""/>
      <img src={imagefiat} className="imagefiat" alt=""/>
      <img src={imagesou} className="imagesou" alt=""/>
      <img src={imagemarc} className="imagemarc" alt=""/>
      <img src={imagetout} className="imagetout" alt=""/>
      <img src={imagenisan} className="imagenisan" alt=""/>
      <img src={imagehond} className="imagehond" alt=""/>
      <img src={imagehonda} className="imagehonda" alt=""/>
      <img src={imagevolva} className="imagevolva" alt=""/>
      <img src={imagevolvo} className="imagevolvo" alt=""/>
      <img src={imagekia} className="imagekia" alt=""/>
      <img src={imagejeep} className="imagejeep" alt=""/>

      </div>

      <h3>Fresh Recommendations</h3>
      <div className="rent-one">
      <img src={imagerentcar} className="imagerentcar" alt=""/>
      <h4>Kia Sportage For Rent</h4>
      <i class="fa-regular fa-heart"></i>
      <h4>EGP 1,300</h4>
      <h4 className="courser">0 to 99</h4>
      <img src={imagecounter} className="imagecounter" alt=""/>
      <img src={imagelocation} className="imagelocation" alt=""/>
      <h4 className="isma">Ismailia City,Ismailia</h4>
      <h4>Added 23 minutes ago</h4>
      </div>

      <div className="rent-two">
      <img src={imagerentcar} className="imagerentcar" alt=""/>
      <h4>Kia Sportage For Rent</h4>
      <i class="fa-regular fa-heart"></i>
      <h4>EGP 1,300</h4>
      <h4 className="courser">0 to 99</h4>
      <img src={imagecounter} className="imagecounter" alt=""/>
      <img src={imagelocation} className="imagelocation" alt=""/>
      <h4 className="isma">Ismailia City,Ismailia</h4>
      <h4>Added 23 minutes ago</h4>
      </div>

      <div className="rent-three">
      <img src={imagerentcar} className="imagerentcar" alt=""/>
      <h4>Kia Sportage For Rent</h4>
      <i class="fa-regular fa-heart"></i>
      <h4>EGP 1,300</h4>
      <h4 className="courser">0 to 99</h4>
      <img src={imagecounter} className="imagecounter" alt=""/>
      <img src={imagelocation} className="imagelocation" alt=""/>
      <h4 className="isma">Ismailia City,Ismailia</h4>
      <h4>Added 23 minutes ago</h4>
      </div>

      <div className="rent-four">
      <img src={imagerentcar} className="imagerentcar" alt=""/>
      <h4>Kia Sportage For Rent</h4>
      <i class="fa-regular fa-heart"></i>
      <h4>EGP 1,300</h4>
      <h4 className="courser">0 to 99</h4>
      <img src={imagecounter} className="imagecounter" alt=""/>
      <img src={imagelocation} className="imagelocation" alt=""/>
      <h4 className="isma">Ismailia City,Ismailia</h4>
      <h4>Added 23 minutes ago</h4>
      </div>
      
      <div className="rent-five">
      <img src={imagerentcar} className="imagerentcar" alt=""/>
      <h4>Kia Sportage For Rent</h4>
      <i class="fa-regular fa-heart"></i>
      <h4>EGP 1,300</h4>
      <h4 className="courser">0 to 99</h4>
      <img src={imagecounter} className="imagecounter" alt=""/>
      <img src={imagelocation} className="imagelocation" alt=""/>
      <h4 className="isma">Ismailia City,Ismailia</h4>
      <h4>Added 23 minutes ago</h4>
      </div>

      <div className="rent-six">
      <img src={imagerentcar} className="imagerentcar" alt=""/>
      <h4>Kia Sportage For Rent</h4>
      <i class="fa-regular fa-heart"></i>
      <h4>EGP 1,300</h4>
      <h4 className="courser">0 to 99</h4>
      <img src={imagecounter} className="imagecounter" alt=""/>
      <img src={imagelocation} className="imagelocation" alt=""/>
      <h4 className="isma">Ismailia City,Ismailia</h4>
      <h4>Added 23 minutes ago</h4>
      </div>
        <button className="but-see">See More</button>
      <Foter />
   </>
   );
}

export default Home;