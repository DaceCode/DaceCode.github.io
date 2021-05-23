function ServiceCard(props) {
    return (
      <div className="col-6a ServiceCard">
            <div className="serviceIcon"  >
            <img src={props.serviceIcon} alt="" />
            </div>
          <div className="serviceDetails">

            <h3 className="serviceTitle">{props.serviceTitle}</h3>
            <p className="serviceDesc">{props.serviceDesc}</p>
          </div>
    
        {/* <div className="row">
          <div className="col-4">
            <img src={props.serviceIcon} className="serviceIcon" alt="" />
          </div>
          <div className="col-8">
            <h3 className="serviceTitle">{props.serviceTitle}</h3>
            <p className="serviceDesc">{props.serviceDesc}</p>
          </div>
        </div> */}
      </div>
    );
  }
  export default ServiceCard;
  