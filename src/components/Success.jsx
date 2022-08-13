import React from 'react';
import OfferBox from './OfferBox';
import featureimage from '../images/payment1.png';
import featureimage2 from '../images/payment2.png';
import featureimage1 from '../images/OfferARide.png';
import HomeBox from './HomeBox';

function Success() {
    return (
        <div id='random2'>

            <div className="formWrap3">
                <div><h1>Accept your Payment</h1></div>
                <div className='a-container'>
                    <HomeBox image={featureimage} title='Online' />
                    <HomeBox image={featureimage2} title='Cash' />

                </div>
            </div>
        </div>
    )

}

export default Success;
