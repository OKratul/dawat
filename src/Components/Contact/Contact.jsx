import React from 'react';
import './Contact.css';

export const Contact = () => {
  return (
    <>
      <div className="contact" id='contact'>
        <div className="container">
            <div className='conatct-title'>
              <h2>Contact</h2>
            </div>
            <div className="contact-content">
              <div className='text-center'>
                <img src="images/main_logo.png" alt="" className='img-fluid' />
                <div className='mt-5'>
                  <p>
                    20, floor, Queenslad Victoria Building. 60 california street california USA
                  </p>
                  <h5>
                    hello@dawat.com
                  </h5>
                  <h5>
                    +88 000 0000 1111
                  </h5>
                </div>
                <div className='contact-social mt-5'>
                    <ul>
                      <li>
                        <a href="#">
                         <i class="fa-brands fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa-brands fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa-brands fa-google-plus-g"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa-brands fa-pinterest"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa-brands fa-linkedin"></i>
                        </a>
                      </li>
                    </ul>
                </div>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}
