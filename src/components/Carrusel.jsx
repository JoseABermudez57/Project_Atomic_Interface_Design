import Pizza from "../assets/images/Pizza.png";
import Img1 from "../assets/images/Flecha1.png"
import Img2 from "../assets/images/Flecha2.png"
import '../assets/styles/carrusel.css'

function Carrusel() {
  return (
    <center>
      <div className="carrusel-div">
        <button><img src={Img2} alt="" /></button>
        <img src={Pizza} alt="pitza rico" />
        <button><img src={Img1} alt="" /></button>
      </div>
    </center>
  );
}

export default Carrusel;
