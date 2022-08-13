import React from 'react';
import OfferBox from './OfferBox';
import featureimage from '../images/feature_3.png';
import featureimage2 from '../images/payment2.png';
import featureimage1 from '../images/OfferARide.png';
import HomeBox from './HomeBox';

function Thankyou() {
    return (
        <div id='random2'>

            <div className="formWrap3">
                <div className='a-container'>
                    <HomeBox image={featureimage} title='Thanks For using BiCAR' />


                </div>
            </div>
        </div>
    )

}

export default Thankyou;
