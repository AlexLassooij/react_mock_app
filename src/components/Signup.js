import React from 'react';
import './Signup.css';
function Signup() {
    return (
        <>
    <div className="container">
        <div className = 'form-control'>
            <label>User Name:</label>
             <input type = 'text' placeholder = 'User name'/>
        </div>
        <div className = 'form-control'>
            <label>Password:</label>
            <input type = 'password' placeholder = 'Password' />
        </div>
        <p>Already have account? click here to log in</p>
            <div className = 'form-control'>
            <input type = 'submit' value = {'Create Account'}
            className = 'btn'></input>
        </div>
    </div>
    </>)
}

export default Signup
