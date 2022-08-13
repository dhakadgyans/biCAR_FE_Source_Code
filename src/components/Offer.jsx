import React from 'react';
import OfferBox from './OfferBox';
import featureimage from '../images/feature_1.png';
import featureimage1 from '../images/rentACar.png';
import { useLocation } from "react-router-dom";
import { alignPropType } from 'react-bootstrap/esm/DropdownMenu';
import { ListGroupItemHeading } from 'reactstrap';

function Offer() {
    const location = useLocation();
    console.log(location.state.custid);
    return (
        <div id="c"><a href={"http://localhost:3000/Login"}><h5 >Logout</h5></a>
            <div className="formWrap2">

                <div className="logoclass2"></div>
                <div className='a-container'>
                    <OfferBox image={featureimage} title='Pool A CAR' custid={location.state.custid} />
                    <OfferBox image={featureimage1} title='Rent A CAR' custid={location.state.custid} />
                </div>
            </div>
        </div>

    )
}

export default Offer;
