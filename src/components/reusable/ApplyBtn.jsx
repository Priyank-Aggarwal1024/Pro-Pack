import React from 'react';
import '../../styles/applybtn.css'

function ApplyBtn({ classes, text }) {
    return (
        <p className={`pro-pac-apply-now-btn ${classes}`}>
            {text}
        </p>
    );
}

export default ApplyBtn;
