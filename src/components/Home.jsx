import React from 'react';
import OfferBox from './OfferBox';
import featureimage from '../images/Frame.png';
import featureimage1 from '../images/OfferARide.png';
import HomeBox from './HomeBox';

function Home() {
    return (
        <div id='random2'>

            <div className="formWrap3">
                <div className='a-container'>
                    <HomeBox image={featureimage} title='Get Started !' />

                </div>
            </div>
        </div>
    )

}

export default Home;
