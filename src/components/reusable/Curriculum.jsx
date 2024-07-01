import React, { useState } from 'react';
import '../../styles/curriculum.css'
function Curriculum({ setViewCurriculum }) {
    const [ls1, setLs1] = useState([
        {
            checked: true,
            ques: "Getting Started",
            ans: "With the help of Produce UI’s Elements and Components you no need to work on Designs from scratch we build components for re using, "
        },
        {
            checked: false,
            ques: "Basic",
            ans: "With the help of Produce UI’s Elements and Components you no need to work on Designs from scratch we build components for re using, "
        },
        {
            checked: false,
            ques: "Loops & Basic Data Structures",
            ans: "With the help of Produce UI’s Elements and Components you no need to work on Designs from scratch we build components for re using, "
        },
        {
            checked: false,
            ques: "Strings",
            ans: "With the help of Produce UI’s Elements and Components you no need to work on Designs from scratch we build components for re using, "
        },
        {
            checked: false,
            ques: "Functions",
            ans: "With the help of Produce UI’s Elements and Components you no need to work on Designs from scratch we build components for re using, "
        },
        {
            checked: false,
            ques: "OOPs & Encapsulation",
            ans: "With the help of Produce UI’s Elements and Components you no need to work on Designs from scratch we build components for re using, "
        }
    ])
    const [ls2, setLs2] = useState([
        {
            checked: false,
            ques: "Polymorphism",
            ans: "With the help of Produce UI’s Elements and Components you no need to work on Designs from scratch we build components for re using, "
        },
        {
            checked: false,
            ques: "Inheritance",
            ans: "With the help of Produce UI’s Elements and Components you no need to work on Designs from scratch we build components for re using, "
        },
        {
            checked: false,
            ques: "Abstraction",
            ans: "With the help of Produce UI’s Elements and Components you no need to work on Designs from scratch we build components for re using, "
        },
        {
            checked: false,
            ques: "Exception Handing",
            ans: "With the help of Produce UI’s Elements and Components you no need to work on Designs from scratch we build components for re using, "
        },
        {
            checked: false,
            ques: "STL- Standard Template Library",
            ans: "With the help of Produce UI’s Elements and Components you no need to work on Designs from scratch we build components for re using, "
        },
        {
            checked: false,
            ques: "Streams- File input Output in C++",
            ans: "With the help of Produce UI’s Elements and Components you no need to work on Designs from scratch we build components for re using, "
        },
    ])
    const ls1Callback = (idx) => {
        const temp = ls1.map((item, index) => {
            if (index == idx) {
                item.checked = !item.checked;
            } else {
                item.checked = false
            }
            return item;
        });
        setLs1(temp)

    }
    const ls2Callback = (idx) => {
        const temp = ls2.map((item, index) => {
            if (index == idx) {
                item.checked = !item.checked;
            } else {
                item.checked = false
            }
            return item;
        });
        setLs2(temp)

    }

    return (
        <div className="pro-pac-curriculum-payment" onClick={(e) => setViewCurriculum(false)}>
            <div className="pro-pac-curriculum-payment-inner" onClick={(e) => { e.stopPropagation() }}>
                <div className="pro-pac-curriculum-payment-modal-close" onClick={() => setViewCurriculum(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                        <path d="M21 21L11.5 11.5L2 2M21 2L2 21" stroke="white" strokeWidth="3.83333" strokeLinecap="round" />
                    </svg>
                </div>
                <h2 className="pro-pac-heading-curriculum pro-pac-fw-400 pro-pac-text-black pro-pac-text-center">Course <span className="pro-pac-fw-700 pro-pac-text-pink">Curriculum</span></h2>
                <div className="pro-pac-curriculum-payment-inner-main">
                    <div className="pro-pac-curriculum-payment-top">
                        <div className="pro-pac-curriculum-payment-top-card">
                            <div className="pro-pac-ctc-outer-icon">
                                <div className="pro-pac-ctc-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="35" viewBox="0 0 36 35" fill="none">
                                        <g clipPath="url(#clip0_433_28559)">
                                            <path d="M13.5234 24.7161L19.5363 27.9958V31.9085H9.46683C7.8701 31.9085 6.58984 30.6283 6.58984 29.0315V6.01566C6.58984 5.25263 6.89295 4.52086 7.43249 3.98132C7.97203 3.44178 8.7038 3.13867 9.46683 3.13867H10.9053V13.2081L14.5016 11.0504L18.0978 13.2081V3.13867H26.7287C27.4918 3.13867 28.2235 3.44178 28.7631 3.98132C29.3026 4.52086 29.6057 5.25263 29.6057 6.01566V18.3004L27.448 17.1208L13.5234 24.7161ZM35.3597 24.7161L27.448 20.4006L19.5363 24.7161L27.448 29.0315L35.3597 24.7161ZM22.4133 27.7225V30.5995L27.448 33.347L32.4827 30.5995V27.7225L27.448 30.47L22.4133 27.7225Z" fill="url(#paint0_linear_433_28559)" fillOpacity="0.87" />
                                        </g>
                                        <defs>
                                            <linearGradient id="paint0_linear_433_28559" x1="14.1097" y1="-1.70252" x2="38.4396" y2="0.58468" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#800080" />
                                                <stop offset="1" stopColor="#FF864C" />
                                            </linearGradient>
                                            <clipPath id="clip0_433_28559">
                                                <rect width="34.5238" height="34.5238" fill="white" transform="translate(0.835938 0.261719)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <div className="pro-pac-ctc-main">
                                <div className="pro-pac-ctcm-heading">40000+</div>
                                <div className="pro-pac-ctcm-text">Learners</div>
                            </div>
                        </div>
                        <div className="pro-pac-curriculum-payment-top-card">
                            <div className="pro-pac-ctc-outer-icon">
                                <div className="pro-pac-ctc-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="35" viewBox="0 0 36 35" fill="none">
                                        <g clipPath="url(#clip0_433_28567)">
                                            <mask id="mask0_433_28567" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="1" y="0" width="34" height="35">
                                                <path d="M17.756 31.9088C25.7008 31.9088 32.1409 25.4686 32.1409 17.5238C32.1409 9.57905 25.7008 3.13892 17.756 3.13892C9.81122 3.13892 3.37109 9.57905 3.37109 17.5238C3.37109 25.4686 9.81122 31.9088 17.756 31.9088Z" fill="white" stroke="white" strokeWidth="4.60317" strokeLinejoin="round" />
                                                <path d="M17.7617 8.89282V17.531L23.8602 23.6302" stroke="black" strokeWidth="4.60317" strokeLinecap="round" strokeLinejoin="round" />
                                            </mask>
                                            <g mask="url(#mask0_433_28567)">
                                                <path d="M0.492188 0.261963H35.016V34.7858H0.492188V0.261963Z" fill="url(#paint0_linear_433_28567)" fillOpacity="0.87" />
                                            </g>
                                        </g>
                                        <defs>
                                            <linearGradient id="paint0_linear_433_28567" x1="9.51601" y1="-5.27082" x2="38.6857" y2="-2.39154" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#800080" />
                                                <stop offset="1" stopColor="#FF864C" />
                                            </linearGradient>
                                            <clipPath id="clip0_433_28567">
                                                <rect width="34.5238" height="34.5238" fill="white" transform="translate(0.488281 0.261963)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>                                <div className="pro-pac-ctc-main">
                                <div className="pro-pac-ctcm-heading">12h 48m</div>
                                <div className="pro-pac-ctcm-text">Content</div>
                            </div>
                        </div>
                        <div className="pro-pac-curriculum-payment-top-card">
                            <div className="pro-pac-ctc-outer-icon">
                                <div className="pro-pac-ctc-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                                        <g clipPath="url(#clip0_433_28580)">
                                            <path d="M17.0728 6.82084H22.2934L28.0186 1.07822C28.1803 0.915116 28.3728 0.785656 28.5849 0.697309C28.7969 0.608962 29.0244 0.563477 29.2541 0.563477C29.4838 0.563477 29.7113 0.608962 29.9233 0.697309C30.1354 0.785656 30.3279 0.915116 30.4896 1.07822L34.9793 5.5853C35.3034 5.91135 35.4854 6.3524 35.4854 6.81213C35.4854 7.27187 35.3034 7.71292 34.9793 8.03897L30.9943 12.0414H17.0728V15.5218C17.0728 15.9833 16.8895 16.4259 16.5631 16.7523C16.2368 17.0786 15.7941 17.262 15.3326 17.262C14.8711 17.262 14.4285 17.0786 14.1021 16.7523C13.7758 16.4259 13.5924 15.9833 13.5924 15.5218V10.3012C13.5924 9.37816 13.9591 8.49291 14.6118 7.84021C15.2645 7.18752 16.1498 6.82084 17.0728 6.82084ZM6.63169 15.5218V22.4825L2.64666 26.4675C2.32255 26.7936 2.14063 27.2346 2.14062 27.6944C2.14063 28.1541 2.32255 28.5952 2.64666 28.9212L7.13634 33.4283C7.29811 33.5914 7.49058 33.7208 7.70264 33.8092C7.91469 33.8975 8.14215 33.943 8.37187 33.943C8.6016 33.943 8.82905 33.8975 9.04111 33.8092C9.25316 33.7208 9.44563 33.5914 9.6074 33.4283L17.0728 25.9629H24.0335C24.4951 25.9629 24.9377 25.7795 25.264 25.4532C25.5904 25.1268 25.7737 24.6842 25.7737 24.2227V22.4825H27.5139C27.9754 22.4825 28.4181 22.2992 28.7444 21.9728C29.0708 21.6465 29.2541 21.2039 29.2541 20.7423V19.0021H30.9943C31.4558 19.0021 31.8984 18.8188 32.2248 18.4924C32.5511 18.1661 32.7345 17.7235 32.7345 17.262V15.5218H20.5532V17.262C20.5532 18.185 20.1865 19.0703 19.5338 19.7229C18.8811 20.3756 17.9959 20.7423 17.0728 20.7423H13.5924C12.6694 20.7423 11.7841 20.3756 11.1314 19.7229C10.4787 19.0703 10.1121 18.185 10.1121 17.262V12.0414L6.63169 15.5218Z" fill="url(#paint0_linear_433_28580)" fillOpacity="0.87" />
                                        </g>
                                        <defs>
                                            <linearGradient id="paint0_linear_433_28580" x1="10.8563" y1="-4.78593" x2="39.0303" y2="-2.00783" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#800080" />
                                                <stop offset="1" stopColor="#FF864C" />
                                            </linearGradient>
                                            <clipPath id="clip0_433_28580">
                                                <rect width="34.5238" height="34.5238" fill="white" transform="translate(0.988281 0.563477)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>                                    <div className="pro-pac-ctc-main">
                                <div className="pro-pac-ctcm-heading">Simple</div>
                                <div className="pro-pac-ctcm-text">English</div>
                            </div>
                        </div>
                    </div>
                    <div className="pro-pac-curriculum-payment-bottom">
                        <div className="pro-pac-curriculum-payment-bottom-card">
                            {
                                ls1.map((item, idx) => {
                                    return (
                                        <div className="pro-pac-curriculum-payment-faq" key={idx}>
                                            <input type="checkbox" value={item.checked} name={`curriculum-ls1-${idx}`} className="pro-pac-curriculum-payment-checkbox" />
                                            <label className="pro-pac-curriculum-payment-ques" htmlFor={`curriculum-ls1-${idx}`} onClick={() => ls1Callback(idx)}>
                                                <p>{item.ques}</p>
                                                <div className="pro-pac-curriculum-payment-faq-icon">
                                                    {
                                                        item.checked ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                                            <path d="M6.75827 17.7426L12.0009 12.5M17.2435 7.25736L12.0009 12.5M12.0009 12.5L6.75827 7.25736M12.0009 12.5L17.2435 17.7426" stroke="#4C4C4C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                                            <path d="M6 12.5H12M18 12.5H12M12 12.5V6.5M12 12.5V18.5" stroke="#4C4C4C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    }
                                                </div>
                                            </label>
                                            <div className="pro-pac-curriculum-payment-ans" style={{ display: item.checked ? "block" : "none" }}>
                                                {
                                                    item.ans
                                                }
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="pro-pac-curriculum-payment-bottom-card">
                            {
                                ls2.map((item, idx) => {
                                    return (
                                        <div className="pro-pac-curriculum-payment-faq" key={idx}>
                                            <input type="checkbox" value={item.checked} name={`curriculum-ls2-${idx}`} className="pro-pac-curriculum-payment-checkbox" />
                                            <label className="pro-pac-curriculum-payment-ques" htmlFor={`curriculum-ls2-${idx}`} onClick={() => ls2Callback(idx)}>
                                                <p>{item.ques}</p>
                                                <div className="pro-pac-faq-icon">
                                                    {
                                                        item.checked ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                                            <path d="M6.75827 17.7426L12.0009 12.5M17.2435 7.25736L12.0009 12.5M12.0009 12.5L6.75827 7.25736M12.0009 12.5L17.2435 17.7426" stroke="#4C4C4C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                                            <path d="M6 12.5H12M18 12.5H12M12 12.5V6.5M12 12.5V18.5" stroke="#4C4C4C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    }
                                                </div>
                                            </label>
                                            <div className="pro-pac-curriculum-payment-ans" style={{ display: item.checked ? "block" : "none" }}>
                                                {
                                                    item.ans
                                                }
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Curriculum;