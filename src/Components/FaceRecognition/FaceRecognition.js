import React from "react";
import './FaceRecognition.css'

const FaceRecognition = ({ imageUrl, box}) => {
    return (
        <div className="center ma">
            <div className="absolute mt2">
                <img id = "URLImage" alt="" src={ imageUrl } width='500px' height='auto' />
                <div className="bounding-box" style={{top: box.Top_Row, right: box.Right_Col, bottom: box.Bottom_Row, left: box.Left_Col}}></div>
            </div>
        </div>
    )
}

export default FaceRecognition;