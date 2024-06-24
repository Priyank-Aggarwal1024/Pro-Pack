import React from 'react';
import '../../styles/duration.css'
function Duration({ text, color }) {
    return (
        <>
            <div className="pro-pac-duration-box">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                    <path d="M6.97266 2H18.9727V8L14.9727 12L18.9727 16V22H6.97266V16L10.9727 12L6.97266 8V2ZM16.9727 16.5L12.9727 12.5L8.97266 16.5V20H16.9727V16.5ZM12.9727 11.5L16.9727 7.5V4H8.97266V7.5L12.9727 11.5ZM10.9727 6H14.9727V6.75L12.9727 8.75L10.9727 6.75V6Z" fill={color ? "#fff" : "#800080"} />
                </svg>
                <span>{text}</span>
            </div>
        </>
    );
}

export default Duration;