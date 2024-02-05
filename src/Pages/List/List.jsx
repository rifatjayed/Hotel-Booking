import React from 'react';
import "./List.css"
import Navbar from '../../Components/Navbar/Navbar';
import Header from '../../Components/Header/Header';

const List = () => {
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
                      <input type="text" />
                      </div>
                      <div className="lsItem">
                        <label >Check-In date</label>
                      <input type="text" />
                      </div>
                    
                    </div>
                    <div className="lisResult"></div>
                </div>
            </div>
        </div>
    );
};

export default List;