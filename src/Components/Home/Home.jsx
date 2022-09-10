import React from 'react';
import './Home.css';
import { Menu } from '../Menu/Menu';
import { HomeSlider } from '../HomeSlider/HomeSlider';
import { Aboutus } from '../Aboutus/Aboutus';
import { Offer } from '../Offer/Offer';
import { FoodMenu } from '../FoodMenu/FoodMenu';
export const Home = () => {
  return (
    <>
        <Menu></Menu>
        <HomeSlider></HomeSlider>
        <Aboutus></Aboutus>
        <Offer/>
        <FoodMenu/>
    </>
  )
}
