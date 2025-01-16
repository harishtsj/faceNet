import React from "react";

const Image = ( {ImageURL} ) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center'}}>
            <img alt="" src={ ImageURL } width='500px' height='auto'/>
        </div>
    );
}

export default Image;