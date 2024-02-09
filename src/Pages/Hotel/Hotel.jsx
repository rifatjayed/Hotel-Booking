import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Header from '../../Components/Header/Header';
import { FaLocationDot } from "react-icons/fa6";



const Hotel = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header type="List"></Header>
            <div className="hotelContainer">
                <div className="hotelWrapper">
                    <h1 className="hotelTitle">Grand Hotel</h1>
                    <div className="hotelAddress">
                        <FaLocationDot />
                        <span>Elton st 125 New York</span>
                    </div>
                    <span className="hotelDistance">
                        Excellent Location - 500m from center
                    </span>
                    <span className="hotelPriceHighlight">
                        Book a stay over $114 at this property and get a free airport taxi
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Hotel;