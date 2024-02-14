import React, { useState } from 'react';
import "./Hotel.css"
import Navbar from '../../Components/Navbar/Navbar';
import Header from '../../Components/Header/Header';
import { FaLocationDot } from "react-icons/fa6";
import MailList from '../../Components/MailList/MailList';
import Footer from '../../Components/Footer/Footer';
import { FaCircleXmark } from "react-icons/fa6";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";






const Hotel = () => {


    // const [slideNumber, setSlideNumber] = useState(0);
    // const [open, setOpen] = useState(false);
    const [slideNumber, setSlideNumber] = useState(0);
    const [open, setOpen] = useState(false);

    const photos = [
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
        },
    ];

    // const handleOpen = (i) => {
    //     setSlideNumber(i);
    //     setOpen(true)
    // }

    const handleOpen = (i) => {
        setSlideNumber(i);
        setOpen(true);
    };

    const handleMove=(direction)=>{
let newSliderNumber;
if(direction ==="l"){
    newSliderNumber= slideNumber ===0 ? 5 : slideNumber -1;

}
else{
    newSliderNumber= slideNumber === 5? 0 : slideNumber + 1;
}
setSlideNumber(newSliderNumber)
    }

    return (
        <div>
            <Navbar></Navbar>
            <Header type="List"></Header>
            <div className="hotelContainer">
              

                {open && (
                    <div className="slider">
                       <FaCircleXmark className='close' onClick={()=> setOpen(false)}/>
                       <FaArrowAltCircleLeft className='arrow' onClick={()=> handleMove("l")}></FaArrowAltCircleLeft>
                        <div className="sliderWrapper">
                            <img src={photos[slideNumber].src} alt="" className="sliderImg" />
                        </div>
                        
                         <FaArrowAltCircleRight  className='arrow' onClick={()=> handleMove("r")}/>
                    </div>
                )}

                <div className="hotelWrapper">
                    <button className="bookNow">Reserve or Book Now</button>
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

                    <div className="hotelImages">
                        {photos.map((photo, i) => (
                            <div className="hotelImgWrapper" key={i}>
                                <img
                                    onClick={()=>handleOpen(i)}
                                    src={photo.src}
                                    alt=""
                                    className="hotelImg"
                                />
                            </div>
                        ))}
                    </div>
                    <div className="hotelDetails">
                        <div className="hotelDetailsTexts">
                            <h1 className="hotelTitle">
                                Stay in The heart of krakow
                            </h1>
                            <p className="hotelDesc">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ratione recusandae dolore voluptas magnam eos eveniet ullam. Consequatur, natus similique, ab doloremque eos ut voluptates optio reiciendis totam dolorum voluptatibus blanditiis, modi beatae? Eligendi at iste nihil mollitia expedita quos accusantium accusamus adipisci magni ipsa? Ab eaque odio porro quos.
                            </p>
                        </div>
                        <div className="hotelDetailsPrice">
                            <h1>Perfect for a 9-night stay</h1>
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, exercitationem.</span>
                            <h2>
                                <b>$945</b>(9 night)
                            </h2>
                            <button>Reserve Or Book Now</button>
                        </div>
                    </div>
                </div>
                <MailList></MailList>
                <Footer> </Footer>
            </div>
        </div>
    );

};

export default Hotel;