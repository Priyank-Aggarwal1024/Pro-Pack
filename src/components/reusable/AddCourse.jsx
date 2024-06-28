import React from 'react';
import '../../styles/addcourse.css'
function AddCourse({ course, index }) {
    return (
        <>
            <div className={`pro-pac-added-course `}>
                <div className="pro-pac-added-course-left">
                    {course.name}
                </div>
                <div className="pro-pac-added-course-right">
                    <span>{course.price}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="31" viewBox="0 0 32 31" fill="none">
                        <g filter="url(#filter0_d_386_216)">
                            <g clipPath="url(#clip0_386_216)">
                                <rect x="3.43945" y="3.37958" width="25" height="24" rx="4.21706" fill="#800080" />
                                <rect x="9.99805" y="14.0007" width="11" height="2" fill="white" />
                            </g>
                        </g>
                        <defs>
                            <filter id="filter0_d_386_216" x="0.0658045" y="0.00592899" width="31.7473" height="30.7473" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset />
                                <feGaussianBlur stdDeviation="1.68682" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0.515833 0 0 0 0 0.515833 0 0 0 0 0.515833 0 0 0 0.25 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_386_216" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_386_216" result="shape" />
                            </filter>
                            <clipPath id="clip0_386_216">
                                <rect x="3.43945" y="3.37958" width="25" height="24" rx="4.21706" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
            </div>
            {
                index ? <div className="pro-pac-added-course-border"></div> : null
            }
        </>
    );
}

export default AddCourse;