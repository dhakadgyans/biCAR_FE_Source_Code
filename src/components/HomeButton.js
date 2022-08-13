import React from 'react';
import './Appglobal.scss';


const HomeButton = ({ children, ...otherProps }) => {
    return (
        <button className="btn5" {...otherProps}>
            {children}
        </button>
    );
}

export default HomeButton;