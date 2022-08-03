import { useState } from 'react';

const ImageSlider = ({ slides }) => {
    const [ currentIdx, setCurrentIdx ] = useState(0);

    const sliderStyle = {
        height: "100%",
        position: "relative",
    }

    const slideStyles = {
        width: "100%",
        height: "100%",
        borderRadius: "10px",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url(require(${slides[currentIdx].url} ))`, 
    }


    return (
        <div style={sliderStyle}>
            <div style={slideStyles}></div>
        </div>
    )
}

export default ImageSlider