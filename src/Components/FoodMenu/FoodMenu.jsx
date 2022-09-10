import React, { useState } from 'react';
import './FoodMenu.css';
import menu from "./TodayMenu";


export const FoodMenu = () => {

  

  const [items, setItems]= useState(menu);

  const filterItem = (catItem) => {
    const updateItems = menu.filter((curItem)=> {
      return curItem.category === catItem;
    });
    setItems(updateItems);
  }


  return (
    <>
      <div className="food-menu" id='foodmenu'>
        <div className="container p-5">
          <div className='text-center mb-5'>
            <h1>Today's Menu</h1>
            <img src="images/red.png" className='img-fluid' alt="" />
          </div>
          <div className="row">
            <div className="col-12 text-center mb-5">
              <button className='btn' type='button' 
              onClick={() => setItems(menu)}
              >All</button>
              <button className='btn' type='button' onClick={()=> filterItem('breakfast')}>Breakfast</button>
              <button className='btn' type='button' onClick={()=> filterItem('lunch')}>Lunch</button>
              <button className='btn' type='button' onClick={()=> filterItem('dinner')}>Dinner</button>
              <button className='btn' type='button' onClick={()=> filterItem('coffe')}>Coffe</button>
              <button className='btn' type='button' onClick={()=> filterItem('snack')}>Snack</button>
              <hr></hr>
            </div>
          </div>
          
          <div className="row">

              {
                
                items.map( (item,pos) => {
                  const {id, name,image, description, price} = item;

                  return (
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-5 items" key={pos}>
                    <div className='d-flex' >
                      <img  src={image} alt="" className='img-fluid rounded-circle'/>
                      <div>
                        <h4 >{name} <span className='float-right ml-5' key={name}>{price}</span></h4>
                        <p >{description}</p>

                        <button className='btn'>Order Now</button>
                      </div>
                    </div>
                  </div>
                  )
                })
              }

              
            </div>
        </div>
      </div>
    </>
  )
}
