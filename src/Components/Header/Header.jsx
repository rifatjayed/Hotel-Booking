import React, { useState } from 'react';
import { FaBed, FaPlane, FaCar, FaTaxi, FaCalendarAlt } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import { DateRange } from 'react-date-range';
import { format } from "date-fns"

import "./Header.css"


import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css';
import { useNavigate } from 'react-router-dom';
const Header = ({ type }) => {

    const [destination, setDestination] = useState("")
    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1,
    })

    const navigate= useNavigate()

    const handleOption = (name, operation) => {
        setOptions(prev => {
            return {
                ...prev, [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
            }

        })
    }

    const handleSearch =()=>{
        navigate("/hotels", {state:{}})
    }
    return (
        <div className='header '>
            <div className={type == "List"? "headerContainer  listMode": "headerContainer"}>
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
              
          {type !== "List" &&
  
          <div>
            
                     <h1 className='headerTitle'>A lifetime of discounts? Its Genius</h1>
                <p className='headerDesc'>Get rewarded for your travels unlock instant savings of 10% or more with a free Lamabooking account</p>
                <button className='headerBtn'>Sign in/ Register</button>
                <div className="headerSearch">
                    <div className="headerSearchItem">
                        <FaBed className='HeaderIcon' />
                        <input type="text" placeholder='where are you going?' className='HeaderSearchInput' onChange={e=>setDestination(e.target.value)}/>
                    </div>
                    <div className="headerSearchItem">
                        <FaCalendarAlt className='HeaderIcon' />
                        <span onClick={() => setOpenDate(!openDate)} className='headerSearchText'>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                        {openDate &&
                            <DateRange
                                editableDateInputs={true}
                                onChange={item => setDate([item.selection])}
                                moveRangeOnFirstSelection={false}
                                ranges={date}
                                className='date'
                            />
                        }
                    </div>
                    <div className="headerSearchItem">
                        <FaPerson className='HeaderIcon' />
                        <span onClick={()=> setOpenOptions(!openOptions)} className='headerSearchText'>
                            {`${options.adult} adult . ${options.children} children . ${options.room} room`}
                        </span>
                       { openOptions && <div className='options'>
                            <div className="optionItem">
                                <span className="optionText">Adult</span>

                                <div className="optionCounter">
                                    <button 
                                    disabled={options.adult<=1}
                                    className='optionCounterButton' onClick={() => handleOption("adult", "d")}>-</button>
                                    <span className="optionCounterNumber">{options.adult}</span>
                                    <button className='optionCounterButton' onClick={() => handleOption("adult", "i")}>+</button>
                                </div>

                            </div>
                            <div className="optionItem">
                                <span className="optionText">Children</span>
                                <div className="optionCounter">
                                    <button   disabled={options.children<=1} className='optionCounterButton ' onClick={() => handleOption("children", "d")}>-</button>
                                    <span className="optionCounterNumber">{options.children}</span>
                                    <button className='optionCounterButton' onClick={() => handleOption("children", "i")}>+</button>
                                </div>

                            </div>
                            <div className="optionItem">
                                <span className="optionText">Room</span>
                                <div className="optionCounter">
                                    <button disabled={options.room<=1}  className='optionCounterButton' onClick={() => handleOption("room", "d")}>-</button>
                                    <span className="optionCounterNumber">{options.room}</span>
                                    <button className='optionCounterButton' onClick={() => handleOption("room", "i")}>+</button>
                                </div>

                            </div>
                        </div>} 
                    </div>
                    <div className="headerSearchItem">
                       
                        <button className='headerBtn ' onClick={handleSearch}>Search</button>
                    </div>
                </div>
                </div> }      
       
            </div>

        </div>
    );
};

export default Header;
