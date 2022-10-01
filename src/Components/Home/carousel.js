import React,{Component} from "react";

class Carousel extends Component{

    render(){
        return(
     
          <>
       
<div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-interval="1200">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"
        aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
        aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
        aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <a href="listing/listing.html"><img src="images/r3.jpg" className="d-block w-100" alt="..." /></a>
      </div>
      <div className="carousel-item">
        <a href="listing/listing.html"><img src="images/gr.jpg" className="d-block w-100" alt="..."/></a>
      </div>
      <div className="carousel-item">
        <a href="listing/listing.html"><img src="images/15m.jpg" className="d-block w-100" alt="..."/></a>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
      data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
      data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
          </>

     
   
            
        )
    }
}

export default Carousel;