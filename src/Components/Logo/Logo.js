import React from "react";
import Tilt from 'react-parallax-tilt';

import brain from './brain.png'
import './Logo.css'

const Logo = () => {
    return(
        <div className="ma4 mt0">
            <Tilt style={{ height: '150px', width: '150px', background: 'linear-gradient(to right, skyblue, pink)' }} className="br2, shadow-1">
                <div className="pa3">
                    <img alt="brain-logo" src= {brain} style={{ paddingTop: '5px' }}/>
                </div>
            </Tilt>
        </div>
    )
}

export default Logo;