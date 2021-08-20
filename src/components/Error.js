import React from 'react';
import errorimg from '../images/404.png';
import './Error.css';

function Error() {
    return (
        <div id = "error-container">
            <div className="container">
                <div className="right">
                    <h1>
                        You tried to reach {window.location.pathname}. This page doesn't exist. 
                    </h1>
                </div>

                <div className="left">
                    <img src={errorimg} alt="Error 404"/>
                </div>
            </div>
        </div>
    )
}

export default Error