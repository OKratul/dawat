import React from 'react';
import './Offer.css';
import Carousel from 'react-bootstrap/Carousel';

export const Offer = () => {
  return (
    <>
      <div className="offer" id='offer'>
        <div className="container">
          <div className='text-center'>
            <h1>Social Package</h1>
            <img src="images/red.png" className='img-fluid' alt="" />
          </div>
          <div className="offer-slider">
            <Carousel controls={false} touch={true}>
              <Carousel.Item>
                <img
                  className="d-block w-100 img-fluid"
                  src="images/promo_slide_1.jpg"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>40% off for 9'' - 12'' pizza - Wed, Thu, Friday only</h3>
                  <p>Pizza 12 inch + 1 Side Dish + 1,5L Coke Bottle Only From 209,000</p>
                  <button className='btn' type='button'>Order Now</button>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 img-fluid"
                  src="images/promotions_area_bg_2.jpg"
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h3>40% off for 9'' - 12'' pizza - Wed, Thu, Friday only</h3>
                  <p>Pizza 12 inch + 1 Side Dish + 1,5L Coke Bottle Only From 209,000</p>
                  <button className='btn' type='button'>Order Now</button>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </>
  )
}
