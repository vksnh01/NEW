import React from 'react';
import img1 from '../img/img1.jpg';
import img2 from '../img/img2.jpg';
import img3 from '../img/img3.jpg';

const About = (props) => {
    return (<>
        <div>
            <div>
                <div>
                    <h1>Our Restorents & Hotels In India</h1>
                    <div className="carosel1">

                        <div id="carouselExampleFade" className="carousel slide carousel-fade" style={{ backgroundSize: "500% 50%" }} className="carosel" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={img1} className="d-block w-10" className="allimg" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={img2} className="d-block w-50" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={img3} className="d-block w-50" alt="..." />
                                </div> 
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <h1>{props.name}</h1>
    </>)
}
export default About;