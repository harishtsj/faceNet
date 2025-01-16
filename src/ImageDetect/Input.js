import React from "react";

const Input = ({ onInputChange, onDetect }) => {
    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <input type="text" placeholder="Provide Image URL" onChange = {onInputChange} />
            <button onClick = { onDetect }>Detect</button>
        </div>
    );
}

export default Input;