import React, { useState } from 'react';
import "./List.css"
import Navbar from '../../Components/Navbar/Navbar';
import Header from '../../Components/Header/Header';
import { useLocation } from 'react-router-dom';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';

const List = () => {

const location= useLocation()
const [destination, setDestination]= useState(location.state.destination)
const [date, setDate]= useState(location.state.date)
const [openDate, setOpenDate]= useState(false)
const [options, setOptions]= useState(location.state.options)
    return (
        <div>
            <Navbar></Navbar>
            <Header type="List"></Header>
            <div className="listContainer">
                <div className="listWrapper">
                    <div className="listSearch">
                      <h1 className="lsTitle">
                        Search
                      </h1>
                      <div className="lsItem">
                        <label >Destination</label>
                      <input placeholder={destination} type="text" />
                      </div>
                      <div className="lsItem">
                        <label >Check-In date</label>
                     <span onClick={()=>setOpenDate(!openDate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                    {openDate &&
                (
                  <DateRange onChange={item=>setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}></DateRange>
                )
                    }
                      </div>
                    
                    </div>
                    <div className="lisResult"></div>
                </div>
            </div>
        </div>
    );
};

export default List;