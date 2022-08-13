import React from 'react';

function About(props) {
    return (
        <div id='about'>
            <div className='about-image'>
                <img src={props.image} alt=''/>
            </div>
            <div className='about-text'>
                <h2>{props.title} </h2>
                <p>sfslhfdlksjhdfslkjdhflskjdhfslkjdhfskdjfhsdfsf</p>
                <button>{props.button}</button>
            </div>
            
        </div>
    )
}

export default About;
