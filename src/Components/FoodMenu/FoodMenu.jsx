import React, { useState } from 'react';
import './FoodMenu.css';
import menu from "./TodayMenu";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form, FormControl, FormGroup } from 'react-bootstrap';
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';


export const FoodMenu = () => {

  // Modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [items, setItems]= useState(menu);

  const filterItem = (catItem) => {
    const updateItems = menu.filter((curItem)=> {
      return curItem.category === catItem;
    });
    setItems(updateItems);
  }

  // Date

  const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));

  const handleChange = (newValue,event) => {
    setValue(newValue);
    setPerson(event.target.value);
  }

  // Select
  const [person, setPerson] = React.useState('')

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
        <div className="reservation">
          <div className="container">
              <h1>Book A table Now</h1>
              <button className='btn' type='button' onClick={handleShow}>Book Now</button>
              <div>
                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                  >
                    <Modal.Header>
                      <Modal.Title>
                        Table Booking Reservation From
                      </Modal.Title>
                    </Modal.Header>
                    <hr/>
                    <Modal.Body>
                      <Form className='row'>
                        <FormGroup className='col-6 mt-2'>
                          <FormControl type='text' placeholder='Your Name' autoFocus></FormControl>
                        </FormGroup>
                        <FormGroup className='col-6 mt-2'>
                          <FormControl type='email' placeholder='Your Email' autoFocus></FormControl>
                        </FormGroup>
                        <FormGroup className='col-6 mt-3'>
                          <FormControl type='number' placeholder='Mobile' autoFocus></FormControl>
                        </FormGroup>
                        <FormGroup className='col-6 mt-3'>
                          <FormControl type='number' placeholder='Person' autoFocus></FormControl>
                        </FormGroup>
                        <FormGroup className='col-6 mt-3'>
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <Stack spacing={1}>
                              <MobileDatePicker
                                label="Date mobile"
                                inputFormat="MM/DD/YYYY"
                                value={value}
                                onChange={handleChange}
                                renderInput={(params) => <TextField {...params} />}
                              />
                            </Stack>
                          </LocalizationProvider>
                        </FormGroup>
                        <FormGroup className='col-6 mt-3'>
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <Stack spacing={1}>
                            <TimePicker
                              label="Time"
                              value={value}
                              onChange={handleChange}
                              renderInput={(params) => <TextField {...params} />}
                            />
                            </Stack>
                          </LocalizationProvider>
                        </FormGroup>
                       
                      </Form>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                      <Button variant="primary">Book</Button>
                    </Modal.Footer>
                  </Modal>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}
