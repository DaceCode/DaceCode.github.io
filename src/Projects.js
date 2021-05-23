import React from "react"
import ProjectCard from "./components/ProjectCard";
import shopping from "./assets/shopping.svg";
import grocery from "./assets/grocery.svg";
import blog from "./assets/blog.svg";
// import photography from "../assets/photography.svg";
 
function Projects(props) {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <ProjectCard 
          ProjectName="Maa Bastralaya"
          ProjectDescriptions="A Cloth Store. Build on Wordpress with WooCommerce and using RazorPay as payment gateway."
          ProjectUrl="https://maabastralaya.com/"
          ProjectImage={shopping}
      />
            <ProjectCard 
          ProjectName="GoGroceries"
          ProjectDescriptions="A Grocery Delivery Website."
          ProjectUrl=""
          ProjectImage={grocery}
      />
            <ProjectCard 
          ProjectName="Sambalpuri Threads"
          ProjectDescriptions="Logo and Banner Design."
          ProjectUrl="https://www.facebook.com/Sambalpuri-Threads-100319685426918"
          ProjectImage={blog}
      />
    </div>
  )
}
 
export default Projects;