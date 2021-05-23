import Button from "./components/Button";
import HeroImg from "./assets/hero.svg";

function Hero() {
  return (
    <div className="hero" id="body">
      <div className="row">
        <div className="col-6 text">
          <h1>
            We Are <span>DaceCode</span>
          </h1>
          <p>A team of passionate designers and developers from sonepur</p>
          
          <a href="#contact"><Button buttonName="Contact Us"/></a>
        </div>
        <div className="col-6 image">
          <img
            src={HeroImg}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
export default Hero;
