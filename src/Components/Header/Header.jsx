import React, { useState } from 'react';
import { FaBed , FaPlane ,FaCar ,FaTaxi ,FaCalendarAlt } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import { DateRange } from 'react-date-range';

import "./Header.css"


import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; 
const Header = () => {
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);
    
    return (
        <div className='header'>
            <div className="headerContainer">
                      <div className='headerList'>
                <div className='headerListItem active'>
                    <FaBed />
                    <span>Stays</span>
                </div>
                <div className='headerListItem'>
                <FaPlane />

                    <span>Flights</span>
                </div>
                <div className='headerListItem'>
                <FaCar />

                    <span>Car Rentals</span>
                </div>
                <div className='headerListItem'>
                    <FaBed />
                    <span>Attractions</span>
                </div>
                <div className='headerListItem'>
                <FaTaxi />

                    <span>Airport Taxis</span>
                </div>

            </div>   
            <h1 className='headerTitle'>A lifetime of discounts? Its Genius</h1>
           <p className='headerDesc'>Get rewarded for your travels unlock instant savings of 10% or with a free Lamabooking account</p>
           <button className='headerBtn'>Sign in/ Register</button>
            <div className="headerSearch">
                <div className="headerSearchItem">
                <FaBed className='HeaderIcon'/>
                <input type="text" placeholder='where are you going?' className='HeaderSearchInput'/>
                </div>
                <div className="headerSearchItem">
                <FaCalendarAlt  className='HeaderIcon'/>
               <span className='headerSearchText'>Date to date</span>
               <DateRange
  editableDateInputs={true}
  onChange={item => setDate([item.selection])}
  moveRangeOnFirstSelection={false}
  ranges={date}
  className='date'
/>
                </div>
                <div className="headerSearchItem">
                <FaPerson  className='HeaderIcon'/>
                <span className='headerSearchText'>2 adults 2 Childred 1 room</span>
                </div>
                <div className="headerSearchItem">
                <FaPerson  className='HeaderIcon'/>
               <button className='headerBtn '>Search</button>
                </div>
            </div>
            </div>
   
        </div>
    );
};

export default Header;