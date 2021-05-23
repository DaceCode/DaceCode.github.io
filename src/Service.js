import ServiceCard from "./components/ServiceCard";
import web_android from "./assets/web-android.svg";
import graphics_design from "./assets/graphics-design.svg";
import uiux from "./assets/ui-ux.svg";
import photography from "./assets/photography.svg";
// import {,,} from "../assets/*";

function Service(props) {
  return (
    <div>
      <h1>What We Do</h1>
      <div className="row service">
          <ServiceCard 
            serviceIcon={web_android}
            serviceTitle="Website & Android Development" 
            serviceDesc="Building Android Apps and websites with the latest technologies to meet your business needs." 
          />
            <ServiceCard 
            serviceIcon={graphics_design}
            serviceTitle="Graphics Design" 
            serviceDesc="We Design Vector Arts, Posters, Pamplets, Flexes, Logos for your company." 
          />
            <ServiceCard 
            serviceIcon={uiux}
            serviceTitle="UI & UX" 
            serviceDesc="We develop user Interface and attractive design, that engage your viewers." 
          />
            <ServiceCard 
            serviceIcon={photography} 
            serviceTitle="Product Photography" 
            serviceDesc="We took photo for your online store or for selling product on social media." 
          /> 
      </div>
    </div>
  );
}
export default Service;
