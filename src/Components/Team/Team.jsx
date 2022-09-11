import React from 'react';
import './Team.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export const Team = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <div className="team" id='team'>
        <div className="container">
          <div>
            <h1>Our Chef's</h1>
              <img src="images/red.png" alt="" className='img-fluid'/>
          </div>
          <div className='team-slider'> 
            <div>
              
                <Slider {...settings}>
                <div>
                    <div className='slid-img'>
                      <img src="images/team-1.jpg" alt="" />
                      <div className='slid-social'>
                          <ul>
                            <li>
                              <a href="#">
                                <i className="fa-brands fa-facebook"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                 <i class="fa-brands fa-twitter"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                 <i class="fa-brands fa-instagram"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i class="fa-brands fa-linkedin-in"></i>
                              </a>
                            </li>
                          </ul>
                      </div>
                    </div>
                    <div className='carousel-text mt-3'>
                      <h4>
                        Angel Meskat
                      </h4>
                      <p>
                        Cras senunc massa quisque tempor dolor sit amet 
                      </p>
                    </div>
                </div>
                <div>
                    <div className='slid-img'>
                      <img src="images/team-2.jpg" alt="" />
                      <div className='slid-social'>
                          <ul>
                            <li>
                              <a href="#">
                                <i className="fa-brands fa-facebook"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                 <i class="fa-brands fa-twitter"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                 <i class="fa-brands fa-instagram"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i class="fa-brands fa-linkedin-in"></i>
                              </a>
                            </li>
                          </ul>
                      </div>
                    </div>
                    <div className='carousel-text mt-3'>
                      <h4>
                        Angel Meskat
                      </h4>
                      <p>
                        Cras senunc massa quisque tempor dolor sit amet 
                      </p>
                    </div>
                </div>
                <div>
                    <div className='slid-img'>
                      <img src="images/team-3.jpg" alt="" />
                      <div className='slid-social'>
                          <ul>
                            <li>
                              <a href="#">
                                <i className="fa-brands fa-facebook"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                 <i class="fa-brands fa-twitter"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                 <i class="fa-brands fa-instagram"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i class="fa-brands fa-linkedin-in"></i>
                              </a>
                            </li>
                          </ul>
                      </div>
                    </div>
                    <div className='carousel-text mt-3'>
                      <h4>
                        Angel Meskat
                      </h4>
                      <p>
                        Cras senunc massa quisque tempor dolor sit amet 
                      </p>
                    </div>
                </div>
                <div>
                    <div className='slid-img'>
                      <img src="images/team-4.jpg" alt="" />
                      <div className='slid-social'>
                          <ul>
                            <li>
                              <a href="#">
                                <i className="fa-brands fa-facebook"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                 <i class="fa-brands fa-twitter"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                 <i class="fa-brands fa-instagram"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i class="fa-brands fa-linkedin-in"></i>
                              </a>
                            </li>
                          </ul>
                      </div>
                    </div>
                    <div className='carousel-text mt-3'>
                      <h4>
                        Angel Meskat
                      </h4>
                      <p>
                        Cras senunc massa quisque tempor dolor sit amet 
                      </p>
                    </div>
                </div>
                <div>
                    <div className='slid-img'>
                      <img src="images/team-5.jpg" alt="" />
                      <div className='slid-social'>
                          <ul>
                            <li>
                              <a href="#">
                                <i className="fa-brands fa-facebook"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                 <i class="fa-brands fa-twitter"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                 <i class="fa-brands fa-instagram"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i class="fa-brands fa-linkedin-in"></i>
                              </a>
                            </li>
                          </ul>
                      </div>
                    </div>
                    <div className='carousel-text mt-3'>
                      <h4>
                        Angel Meskat
                      </h4>
                      <p>
                        Cras senunc massa quisque tempor dolor sit amet 
                      </p>
                    </div>
                </div>
                <div>
                    <div className='slid-img'>
                      <img src="images/team-3.jpg" alt="" />
                      <div className='slid-social'>
                          <ul>
                            <li>
                              <a href="#">
                                <i className="fa-brands fa-facebook"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                 <i class="fa-brands fa-twitter"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                 <i class="fa-brands fa-instagram"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i class="fa-brands fa-linkedin-in"></i>
                              </a>
                            </li>
                          </ul>
                      </div>
                    </div>
                    <div className='carousel-text mt-3'>
                      <h4>
                        Angel Meskat
                      </h4>
                      <p>
                        Cras senunc massa quisque tempor dolor sit amet 
                      </p>
                    </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
