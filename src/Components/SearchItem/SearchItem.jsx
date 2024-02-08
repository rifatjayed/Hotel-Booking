import React from 'react';
import './SearchItem.css'
import { details } from '../../Data/Data';
const SearchItem = () => {
    const { RatingDesc, Rating, Title, SubTitle, Features, TaxiOp, CancelOp, Distance, CancelOpSubtitle, Price, img,TaxOp } = details[0]

    return (
        <div className='searchItem'>
            <img src={img} alt="" className="siImg" />
            <div className="siDesc">
                <h1 className="siTitle">{Title}</h1>
                <span className="siDistance">{Distance}</span>
                <span className="siTaxiOp">{TaxiOp}</span>
                <span className="siSubtitle">
                    {SubTitle}
                </span>
                <span className="siFeature">
                    {Features}
                </span>
                <span className="CancelOp">{CancelOp}</span>
                <span className="CancelOpSubtitle">{CancelOpSubtitle}</span>

            </div>
            <div className="siDetails">
                <div className="siRating">
                    <span>{RatingDesc}</span>

                    <button>{Rating}</button>
                </div>
                <div className="siDetailText">
                <span className="siPrice">{Price}</span>
                <span className="siTaxOp">{TaxOp}</span>
                <button className='siCheckButton'>See availability</button>
                </div>
            </div>
        </div>
    );
};

export default SearchItem;