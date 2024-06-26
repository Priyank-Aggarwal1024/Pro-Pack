import React from 'react';
import '../../styles/star.css'

function NextArrow(props) {
    const { classN, style, onClick } = props;

    return (
        <div className={`pro-pac-next-arrow ${classN}`}
            style={{ ...style, display: "flex" }}
            onClick={onClick}
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 27" fill="none">
                <path d="M9.33831 20.6748L16.4438 13.5693L9.33831 6.46372" stroke="#5D6165" strokeWidth="2.36851" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </div>
    );
}

export default NextArrow;
