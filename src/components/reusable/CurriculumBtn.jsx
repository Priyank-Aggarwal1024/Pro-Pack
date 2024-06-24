import React from 'react';
import '../../styles/curriculumbtn.css'
function CurriculumBtn({ color }) {
    return (
        <>
            <div className="pro-pac-curriculum-btn ">
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none">
                    <g clipPath="url(#clip0_300_1123)">
                        <path d="M11.5589 3.76898C6.73807 3.76898 2.62112 6.76751 0.953125 11.0002C2.62112 15.2328 6.73807 18.2313 11.5589 18.2313C16.3796 18.2313 20.4966 15.2328 22.1646 11.0002C20.4966 6.76751 16.3796 3.76898 11.5589 3.76898ZM11.5589 15.8209C8.89778 15.8209 6.73807 13.6612 6.73807 11.0002C6.73807 8.33909 8.89778 6.17937 11.5589 6.17937C14.2199 6.17937 16.3796 8.33909 16.3796 11.0002C16.3796 13.6612 14.2199 15.8209 11.5589 15.8209ZM11.5589 8.10769C9.95835 8.10769 8.66638 9.39966 8.66638 11.0002C8.66638 12.6007 9.95835 13.8926 11.5589 13.8926C13.1594 13.8926 14.4513 12.6007 14.4513 11.0002C14.4513 9.39966 13.1594 8.10769 11.5589 8.10769Z" fill={color ? "#800080" : "white"} />
                    </g>
                    <defs>
                        <clipPath id="clip0_300_1123">
                            <rect width="23.1398" height="23.1398" fill={color ? "#800080" : "white"} transform="translate(0 -0.567871)" />
                        </clipPath>
                    </defs>
                </svg>
                <span>Curriculum</span>
            </div>
        </>
    );
}

export default CurriculumBtn;