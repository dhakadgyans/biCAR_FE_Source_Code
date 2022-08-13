import React from 'react';
import Button from './../components/HomeButton';
import { useHistory } from 'react-router';


function HomeBox(props) {
    const history = useHistory();
    const handleClick = e => {
        if (props.title === 'Get Started !') {
            history.push('/login');
        }
        else if (props.title === 'Online') {
            history.push('/Thankyou');
        } else if (props.title === 'Cash') {
            history.push('/Thankyou');
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

export default HomeBox;
