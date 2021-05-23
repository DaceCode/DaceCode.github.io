import Button from "./Button";

function ProjectCard(props) {
    return (
        <div class="row">
           
            <div class="col-6 text">
                <h2> {props.ProjectName}</h2>
                <p>{props.ProjectDescriptions}</p>
                <a href={props.ProjectUrl}>
                <Button buttonName="View Project"/>
                </a>
            </div>
            <div class="col-6 image">
                <img src={props.ProjectImage} alt=""/>
                </div>
        </div>

    );
  }
  export default ProjectCard;

      //   <div className="col-6a ServiceCard">
    //         <div className="serviceIcon"  >
    //         <img src={props.serviceIcon} alt="" />
    //         </div>
    //       <div className="serviceDetails">

    //         <h3 className="serviceTitle">{props.serviceTitle}</h3>
    //         <p className="serviceDesc">{props.serviceDesc}</p>
    //       </div>
    

    //   </div>