import React from 'react';
import './container.scss';
const Container=({children})=>{
    return <>
    <div className="container">
        <div className="location_title">Container</div>
        <div className="text-editor-container">{children}</div>
    </div>
    </>
}

export default Container;