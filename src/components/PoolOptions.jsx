import React from 'react';
import OfferBox from './OfferBox';
import featureimage from '../images/findACar.png';
import featureimage1 from '../images/OfferARide.png';
import { useLocation } from "react-router-dom";

function PoolOptions() {
    const location = useLocation();
    console.log(location.state.custid);
    return (
        <div id="c"><a href={"http://localhost:3000/Login"}><h5 >Logout</h5></a>
            <div className="formWrap2">
                <div className="logoclass2"></div>
                <div className='a-container'>
                    <OfferBox image={featureimage} title='Find A Ride' />
                    <OfferBox image={featureimage1} title='Offer A Ride' />
                </div>
            </div>
        </div>
    )

}

export default PoolOptions;
