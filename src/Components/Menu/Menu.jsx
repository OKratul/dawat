import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink as NavLink} from 'react-router-hash-link';
import './Menu.css';
import { motion } from 'framer-motion';

export const Menu = () => {

  const [navmenu,setNavmenu] = useState(false,{class:'mobile-nav'});

  const [sticky,setSticky] = useState(false);

  function scroling(){
    
    if (window.scrollY > 400){
      setSticky(true)
    }
    else{
      setSticky(false)
    }
  }
  window.addEventListener("scroll", scroling);

  return (
    <>
        <div className="menu">
          <div className="top-nav border-none border-top border-bottom border-dark text-light">
              <div>
                <span className='mr-5'><i className="fa-solid fa-envelope"></i>Email: omar@gmail.com</span>
                <span><i className="fa-solid fa-phone"></i>Phone: +8801703064636</span>
              </div>
              <div className='social-top'>
                  <a href="#"><i className="fa-brands fa-facebook"></i></a>
                  <a href="#"><i className="fa-brands fa-instagram"></i></a>
                  <a href="#"><i className="fa-brands fa-github"></i></a>
                  <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                  <a href="#"><i className="fa-brands fa-twitter"></i></a>

                  <button className='btn'>Book A Table</button>
              </div>
          </div>
            <div className={sticky ? 'navbar sticky' : 'navbar'}>
              <div className="logo">
                <Link to='/home'>
                    <img src="./images/main_logo.png" alt="" className='img-fluid' />
                </Link>
              </div>
              <motion.div className={navmenu ? 'mobile-nav nav' : 'nav'}
                  initial={{
                    scale:0,
                    opacity:0,
                  }}
                  whileInView={{
                    scale:1,
                    opacity:1
                  }}
                  transition={{
                    duration:0.8,
                    type:"tween",

                  }}
              
              >
                <ul>
                  <motion.li
                    initial={{
                      x:-100,
                      opacity:0,
                    }}
                    whileInView={{
                      x:0,
                      opacity:1,
                    }}
                    transition={{
                      duration:1,
                      delay:1.2,
                      type:"spring",
                      damping:8,
                    }}
                  >
                    <NavLink smooth to='#home'>Home</NavLink>
                  </motion.li>
                  <motion.li
                      initial={{
                        x:-100,
                        opacity:0,
                      }}
                      whileInView={{
                        x:0,
                        opacity:1,
                      }}
                      transition={{
                        duration:1,
                        delay:1.3,
                        type:"spring",
                        damping:8,
                      }}
                  >
                    <NavLink smooth to='#aboutus'>About Us</NavLink>
                  </motion.li>
                  <motion.li
                      initial={{
                        x:-100,
                        opacity:0,
                      }}
                      whileInView={{
                        x:0,
                        opacity:1,
                      }}
                      transition={{
                        duration:1,
                        delay:1.4,
                        type:"spring",
                        damping:8,
                      }}
                  >
                    <NavLink smooth to='#offer'>Offer</NavLink>
                  </motion.li>
                  <motion.li
                      initial={{
                        x:-100,
                        opacity:0,
                      }}
                      whileInView={{
                        x:0,
                        opacity:1,
                      }}
                      transition={{
                        duration:1,
                        delay:1.5,
                        type:"spring",
                        damping:8,
                      }}
                  >
                    <NavLink smooth to='#foodmenu'>Food Menu</NavLink>
                  </motion.li>
                  <motion.li
                      initial={{
                        x:-100,
                        opacity:0,
                      }}
                      whileInView={{
                        x:0,
                        opacity:1,
                      }}
                      transition={{
                        duration:1,
                        delay:1.6,
                        type:"spring",
                        damping:8,
                      }}
                  >
                    <NavLink smooth to='#team'>Team</NavLink>
                  </motion.li>
                  <motion.li
                      initial={{
                        x:-100,
                        opacity:0,
                      }}
                      whileInView={{
                        x:0,
                        opacity:1,
                      }}
                      transition={{
                        duration:1,
                        delay:1.7,
                        type:"spring",
                        damping:8,
                      }}
                  >
                    <NavLink smooth to='#blog'>Blog</NavLink>
                  </motion.li>
                  <motion.li
                      initial={{
                        x:-100,
                        opacity:0,
                      }}
                      whileInView={{
                        x:0,
                        opacity:1,
                      }}
                      transition={{
                        duration:1,
                        delay:1.8,
                        type:"spring",
                        damping:8,
                      }}
                  >
                    <NavLink smooth to='#gallery'>Gallery</NavLink>
                  </motion.li>
                  <motion.li
                        initial={{
                          x:-100,
                          opacity:0,
                        }}
                        whileInView={{
                          x:0,
                          opacity:1,
                        }}
                        transition={{
                          duration:1,
                          delay:1.9,
                          type:"spring",
                          damping:8,
                        }}
                  >
                    <NavLink smooth to='#contact'>Contact</NavLink>
                  </motion.li>
                  <motion.li
                     initial={{
                      x:-100,
                      opacity:0,
                    }}
                    whileInView={{
                      x:0,
                      opacity:1,
                    }}
                    transition={{
                      duration:1,
                      delay:1.9,
                      type:"spring",
                      damping:8,
                    }}
                  >
                    <button className='btn'>
                      <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                  </motion.li>
                </ul>
              </motion.div>
              <button className='btn mobile-btn' type='button' onClick={()=>{setNavmenu(!navmenu)}}>
                 <i className="fa-solid fa-bars"></i>  
              </button>
            </div>
        </div>
    </>
  )
}
