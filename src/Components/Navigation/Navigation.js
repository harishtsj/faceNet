import React from 'react'
import './Navigation.css'

const Navigation = ({ onRouteChange, isSignedin }) => {

    if(isSignedin) {
        return(
            <nav className='Nav'>
                <p onClick = {() => onRouteChange('signout')} className='f3 link dim black pa3 pointer underline'>Sign-Out</p>
            </nav>
        );
    } else {
        return(
            <nav className='Nav'>
                <p onClick = {() => onRouteChange('signin')} className='f3 link dim black pa3 pointer underline'>Sign-In</p>
                <p onClick = {() => onRouteChange('Register')} className='f3 link dim black pa3 pointer underline'>Register</p>
            </nav>
        );
    }
    
}

export default Navigation;