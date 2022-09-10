import React from 'react';
import './HomeSlider.css';
import Carousel from 'react-bootstrap/Carousel';
import { motion } from 'framer-motion';


export const HomeSlider = () => {
  return (
    <>
        <div className="home-slider" id='home'>
            <Carousel fade variant="dark" indicators={false}>
                <Carousel.Item interval={4000} as={motion.div}>
                    <img
                    className="d-block w-100 img-fluid"
                    src="images/slide_1.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                        <div >
                            <motion.h3
                                initial={{
                                    y:-100,
                                    opacity:0,
                                }}
                                whileInView={{
                                    y:0,
                                    opacity:1,
                                }}
                                transition={{
                                    duration:1,
                                    type:"tween",
                                    delay:0.5
                                }}
                            >Welcome To</motion.h3>
                            <motion.p
                                initial={{
                                    scale:0,
                                    opacity:0
                                }}
                                whileInView={{
                                    scale:1,
                                    opacity:1,
                                }}
                                transition={{
                                    duration:1,
                                    type:"tween",
                                    damping:9,
                                    delay:1,
                                }}
                            >Dawat Cafe & Resturant</motion.p>
                            <motion.button className='btn text-light' type='button'
                            
                                initial={{
                                    rotateX:100,
                                    opacity:0,
                                }}
                                whileInView={{
                                    rotateX:0,
                                    opacity:1,
                                }}
                                transition={{
                                    type:"tween",
                                    duration:1,
                                    delay:1,
                                }}
                            >Reservation Now</motion.button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={4000} as={motion.div}>
                    <img
                    className="d-block w-100 img-fluid"
                    src="images/slide_2.jpg"
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <div >
                            <motion.h3
                                initial={{
                                    y:-100,
                                    opacity:0,
                                }}
                                whileInView={{
                                    y:0,
                                    opacity:1,
                                }}
                                transition={{
                                    duration:1,
                                    type:"tween",
                                    delay:0.5
                                }}
                            >Our Menu's</motion.h3>
                            <motion.p
                                initial={{
                                    scale:0,
                                    opacity:0
                                }}
                                whileInView={{
                                    scale:1,
                                    opacity:1,
                                }}
                                transition={{
                                    duration:1,
                                    type:"tween",
                                    damping:9,
                                    delay:1,
                                }}
                            >See What's New Today</motion.p>
                            <motion.button className='btn text-light' type='button'
                            
                                initial={{
                                    rotateX:100,
                                    opacity:0,
                                }}
                                whileInView={{
                                    rotateX:0,
                                    opacity:1,
                                }}
                                transition={{
                                    type:"tween",
                                    duration:1,
                                    delay:1,
                                }}
                            >Today's Menu</motion.button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={4000} as={motion.div}>
                    <img
                    className="d-block w-100 img-fluid"
                    src="images/slide_3.jpg"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <div >
                            <motion.h3
                                initial={{
                                    y:-100,
                                    opacity:0,
                                }}
                                whileInView={{
                                    y:0,
                                    opacity:1,
                                }}
                                transition={{
                                    duration:1,
                                    type:"tween",
                                    delay:0.5
                                }}
                            >Get Ready</motion.h3>
                            <motion.p
                                initial={{
                                    scale:0,
                                    opacity:0
                                }}
                                whileInView={{
                                    scale:1.1,
                                    opacity:1,
                                }}
                                transition={{
                                    duration:1,
                                    type:"tween",
                                    damping:9,
                                    delay:1,
                                }}
                            >To Join With Us</motion.p>
                            <motion.button className='btn text-light' type='button'
                            
                                initial={{
                                    rotateX:100,
                                    opacity:0,
                                }}
                                whileInView={{
                                    rotateX:0,
                                    opacity:1,
                                }}
                                transition={{
                                    type:"tween",
                                    duration:1,
                                    delay:1,
                                }}
                            >Book A table</motion.button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    
    </>
  )
}
