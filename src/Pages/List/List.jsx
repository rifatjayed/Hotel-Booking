import React, { useState } from 'react';
import "./List.css"
import Navbar from '../../Components/Navbar/Navbar';
import Header from '../../Components/Header/Header';
import { useLocation } from 'react-router-dom';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
import SearchItem from '../../Components/SearchItem/SearchItem';

const List = () => {

  const location = useLocation()
  const [destination, setDestination] = useState(location.state.destination)
  const [date, setDate] = useState(location.state.date)
  const [openDate, setOpenDate] = useState(false)
  const [options, setOptions] = useState(location.state.options)
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
              <span onClick={() => setOpenDate(!openDate)}>{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
              {openDate &&
                (
                  <DateRange onChange={item => setDate([item.selection])}
                    minDate={new Date()}
                    ranges={date}></DateRange>
                )
              }
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOption">

             
              <div className="lsOptionItem">
                <div className="lsOptionText">Min Price <small>Per Night</small></div>
                <input type="number" className="lsOptionInput" />
              </div>
              <div className="lsOptionItem">
                <div className="lsOptionText">Max Price <small>Per Night</small></div>
                <input type="number" className="lsOptionInput" />
              </div>
              <div className="lsOptionItem">
                <div className="lsOptionText">Adult </div>
                <input type="number" min={1} className="lsOptionInput" placeholder={options.adult}/>
              </div>
              <div className="lsOptionItem">
                <div className="lsOptionText">Children</div>
                <input type="number" min={0} className="lsOptionInput" placeholder={options.children}/>
              </div>
              <div className="lsOptionItem">
                <div className="lsOptionText">Room</div>
                <input type="number" min={1} className="lsOptionInput" placeholder={options.room}/>
              </div>
            </div>
            </div>
            <button>Search</button>
          </div>
          <div className="lisResult">
            <SearchItem></SearchItem>
            <SearchItem></SearchItem>
            <SearchItem></SearchItem>
            <SearchItem></SearchItem>
            <SearchItem></SearchItem>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;