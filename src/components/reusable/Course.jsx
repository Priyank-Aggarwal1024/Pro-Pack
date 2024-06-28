import React from 'react';
import '../../styles/course.css'
function Course({ course }) {
    return (
        <>
            <div className="pro-pac-course-card">
                <svg className="pro-pac-course-card-plus" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <g filter="url(#filter0_d_386_415)">
                        <g clipPath="url(#clip0_386_415)">
                            <rect x="4" y="4" width="23.92" height="23.92" rx="4.21706" fill="#800080" />
                            <path d="M22.9455 16.9577H16.9655V22.9377H14.9722V16.9577H8.99219V14.9644H14.9722V8.98438H16.9655V14.9644H22.9455V16.9577Z" fill="white" />
                        </g>
                    </g>
                    <defs>
                        <filter id="filter0_d_386_415" x="0.626351" y="0.626351" width="30.6672" height="30.6673" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset />
                            <feGaussianBlur stdDeviation="1.68682" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0.515833 0 0 0 0 0.515833 0 0 0 0 0.515833 0 0 0 0.25 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_386_415" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_386_415" result="shape" />
                        </filter>
                        <clipPath id="clip0_386_415">
                            <rect x="4" y="4" width="23.92" height="23.92" rx="4.21706" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                <div className="pro-pac-course-card-icon">
                    <img src={course.icon} alt={course.name} />
                </div>
                <div className="pro-pac-course-card-name" lang="en">
                    {course.name}
                </div>
                <div className="pro-pac-course-price">
                    <span>{course.price + " "}</span>
                    <span className="pro-pac-course-price-discount">{course.discount}</span>
                </div>
                <div className="pro-pac-course-curriculum-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="23" viewBox="0 0 24 23" fill="none">
                        <g clipPath="url(#clip0_386_275)">
                            <path d="M12.0159 4.48926C7.1951 4.48926 3.07815 7.48779 1.41016 11.7204C3.07815 15.9531 7.1951 18.9516 12.0159 18.9516C16.8367 18.9516 20.9536 15.9531 22.6216 11.7204C20.9536 7.48779 16.8367 4.48926 12.0159 4.48926ZM12.0159 16.5412C9.35481 16.5412 7.1951 14.3815 7.1951 11.7204C7.1951 9.05936 9.35481 6.89965 12.0159 6.89965C14.677 6.89965 16.8367 9.05936 16.8367 11.7204C16.8367 14.3815 14.677 16.5412 12.0159 16.5412ZM12.0159 8.82796C10.4154 8.82796 9.12341 10.1199 9.12341 11.7204C9.12341 13.3209 10.4154 14.6129 12.0159 14.6129C13.6164 14.6129 14.9084 13.3209 14.9084 11.7204C14.9084 10.1199 13.6164 8.82796 12.0159 8.82796Z" fill="#800080" />
                        </g>
                        <defs>
                            <clipPath id="clip0_386_275">
                                <rect width="23.1398" height="23.1398" fill="white" transform="translate(0.457031 0.152405)" />
                            </clipPath>
                        </defs>
                    </svg>
                    <span>Curriculum</span>
                </div>
            </div>
        </>
    );
}

export default Course;