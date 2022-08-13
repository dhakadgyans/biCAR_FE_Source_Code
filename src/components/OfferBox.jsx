import React from 'react';
import Button from './../components/Button';
import { useHistory } from 'react-router';
import { useLocation } from "react-router-dom";


function OfferBox(props) {
    const location = useLocation();
    console.log(location.state.custid);
    const history = useHistory();
    const handleClick = e => {
        if (props.title === 'Rent A CAR') {
            history.push('/Feature');
        } else if (props.title === 'Find A Ride') {
            history.push('/PoolRidePage', { custid: location.state.custid });
        } else if (props.title === 'Offer A Ride') {
            history.push('/OfferRidePage', { custid: location.state.custid });
        } else if (props.title === 'Get Started') {
            history.push('/login', { custid: location.state.custid });
        } else {
            history.push('/PoolOptions', { custid: location.state.custid });
        }
    }
    return (
        <div className='a-box'>
            <div className='a-b-img'>
                <img src={props.image} />
            </div>
            <div className='s-b-text'>
                <Button onClick={handleClick}>
                    {props.title}
                </Button>
            </div>
        </div>
    )
}

export default OfferBox;
