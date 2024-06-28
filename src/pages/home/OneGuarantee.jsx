import React, { useEffect, useState } from 'react';
import '../../styles/oneguarantee.css'
import Certiificate from '../../assets/certificate.png'
function OneGuarantee(props) {

    return (
        <section className="pro-pac-section pro-pac-one-guarantee">
            <h2 className="pro-pac-og-heading pro-pac-f-48 pro-pac-fw-500 pro-pac-text-black">
                Unlock <span className="pro-pac-fw-700 pro-pac-text-pink"> Industry Recognized 6 Certifications</span>
            </h2>
            <div className="pro-pac-section-one-guarantee">
                <div className="pro-pac-og-left">
                    <div className="pro-pac-og-cards">
                        <div className="pro-pac-og-card-1">
                            <div className="pro-pac-og-card-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="53" height="53" viewBox="0 0 53 53" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M39.1745 2.92626C38.6631 2.10909 37.9096 1.47169 37.0189 1.1028C36.1283 0.733912 35.1448 0.651884 34.2053 0.868137L27.5377 2.39968C26.8544 2.55673 26.1444 2.55673 25.4611 2.39968L18.7935 0.868137C17.854 0.651884 16.8705 0.733912 15.9799 1.1028C15.0892 1.47169 14.3357 2.10909 13.8243 2.92626L10.1901 8.7261C9.81931 9.31943 9.31868 9.82006 8.72535 10.1946L2.92552 13.8288C2.10975 14.3397 1.47329 15.092 1.10448 15.9811C0.735671 16.8703 0.652808 17.8521 0.867392 18.7905L2.39893 25.4655C2.55542 26.1476 2.55542 26.8563 2.39893 27.5385L0.867392 34.2098C0.651974 35.1487 0.73442 36.1314 1.10327 37.0213C1.47212 37.9111 2.10905 38.664 2.92552 39.1752L8.72535 42.8094C9.31868 43.1802 9.81931 43.6808 10.1939 44.2742L13.828 50.074C14.8738 51.7465 16.8689 52.5734 18.7935 52.1321L25.4611 50.6006C26.1444 50.4435 26.8544 50.4435 27.5377 50.6006L34.209 52.1321C35.1479 52.3476 36.1306 52.2651 37.0205 51.8963C37.9104 51.5274 38.6633 50.8905 39.1745 50.074L42.8086 44.2742C43.1795 43.6808 43.6801 43.1802 44.2734 42.8094L50.077 39.1752C50.8935 38.6633 51.5301 37.9096 51.8983 37.019C52.2665 36.1284 52.348 35.1451 52.1314 34.2061L50.6036 27.5385C50.4465 26.8552 50.4465 26.1451 50.6036 25.4618L52.1351 18.7905C52.3509 17.852 52.269 16.8696 51.9008 15.9797C51.5327 15.0899 50.8965 14.3368 50.0807 13.8251L44.2771 10.1909C43.6846 9.81937 43.1839 9.31861 42.8124 8.7261L39.1745 2.92626ZM37.3092 18.2306C37.5385 17.8088 37.5954 17.3145 37.4677 16.8517C37.3401 16.3889 37.0379 15.9936 36.6247 15.7491C36.2115 15.5046 35.7196 15.4298 35.2525 15.5406C34.7854 15.6514 34.3794 15.939 34.12 16.343L24.4227 32.7561L18.5673 27.1491C18.3936 26.9707 18.1857 26.8292 17.9561 26.7329C17.7265 26.6366 17.4799 26.5875 17.2309 26.5886C16.9819 26.5897 16.7357 26.6409 16.5069 26.7392C16.2782 26.8375 16.0716 26.9809 15.8994 27.1607C15.7273 27.3406 15.5931 27.5533 15.5049 27.7861C15.4168 28.019 15.3764 28.2672 15.3862 28.516C15.3961 28.7648 15.4559 29.009 15.5622 29.2342C15.6685 29.4593 15.819 29.6608 16.0048 29.8265L23.5476 37.0541C23.7494 37.2471 23.9923 37.392 24.2581 37.478C24.5238 37.564 24.8055 37.5889 25.0822 37.5507C25.3589 37.5126 25.6234 37.4124 25.856 37.2577C26.0885 37.103 26.2831 36.8977 26.4252 36.6573L37.3092 18.2306Z" fill="white" />
                                </svg>
                            </div>
                            <div className="pro-pac-og-card-text">
                                <div className="pro-pac-og-card-heading">
                                    Official and Verified
                                </div>
                                <p className="pro-pac-og-card-about">
                                    Enhance your credibility and distinguish yourself among peers and industry professionals
                                </p>
                            </div>
                        </div>
                        <div className="pro-pac-og-card-2">
                            <div className="pro-pac-og-card-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="61" height="61" viewBox="0 0 61 61" fill="none">
                                    <path d="M45.75 55.9166C43.6319 55.9166 41.8316 55.1753 40.349 53.6926C38.8663 52.21 38.125 50.4096 38.125 48.2916C38.125 47.9951 38.1462 47.6875 38.1885 47.369C38.2309 47.0504 38.2944 46.7649 38.3792 46.5124L20.4604 36.0916C19.7403 36.727 18.9354 37.2252 18.0458 37.5861C17.1563 37.947 16.2243 38.1266 15.25 38.1249C13.1319 38.1249 11.3316 37.3836 9.84896 35.901C8.36632 34.4183 7.625 32.618 7.625 30.4999C7.625 28.3819 8.36632 26.5815 9.84896 25.0989C11.3316 23.6162 13.1319 22.8749 15.25 22.8749C16.2243 22.8749 17.1563 23.0554 18.0458 23.4163C18.9354 23.7772 19.7403 24.2745 20.4604 24.9083L38.3792 14.4874C38.2944 14.2333 38.2309 13.9477 38.1885 13.6309C38.1462 13.314 38.125 13.0065 38.125 12.7083C38.125 10.5902 38.8663 8.78985 40.349 7.30721C41.8316 5.82457 43.6319 5.08325 45.75 5.08325C47.8681 5.08325 49.6684 5.82457 51.151 7.30721C52.6337 8.78985 53.375 10.5902 53.375 12.7083C53.375 14.8263 52.6337 16.6267 51.151 18.1093C49.6684 19.5919 47.8681 20.3333 45.75 20.3333C44.7757 20.3333 43.8438 20.1536 42.9542 19.7944C42.0646 19.4352 41.2597 18.937 40.5396 18.2999L22.6208 28.7208C22.7056 28.9749 22.7691 29.2613 22.8115 29.5798C22.8538 29.8984 22.875 30.2051 22.875 30.4999C22.875 30.7948 22.8538 31.1023 22.8115 31.4225C22.7691 31.7428 22.7056 32.0283 22.6208 32.2791L40.5396 42.6999C41.2597 42.0645 42.0646 41.5672 42.9542 41.208C43.8438 40.8487 44.7757 40.6683 45.75 40.6666C47.8681 40.6666 49.6684 41.4079 51.151 42.8905C52.6337 44.3732 53.375 46.1735 53.375 48.2916C53.375 50.4096 52.6337 52.21 51.151 53.6926C49.6684 55.1753 47.8681 55.9166 45.75 55.9166Z" fill="white" />
                                </svg>
                            </div>
                            <div className="pro-pac-og-card-text">
                                <div className="pro-pac-og-card-heading">
                                    Easily Shareable
                                </div>
                                <p className="pro-pac-og-card-about">
                                    Showcase your achievements to a wider audience for increased impact.
                                </p>
                            </div>
                        </div>
                        <div className="pro-pac-og-card-3">
                            <div className="pro-pac-og-card-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="57" height="57" viewBox="0 0 57 57" fill="none">
                                    <g clipPath="url(#clip0_300_918)">
                                        <path d="M25.9362 6.81141C26.1975 6.36292 26.5719 5.99079 27.022 5.73215C27.472 5.47351 27.9821 5.3374 28.5012 5.3374C29.0202 5.3374 29.5303 5.47351 29.9803 5.73215C30.4304 5.99079 30.8048 6.36292 31.0662 6.81141L37.7043 18.2067L50.5958 20.9997C51.1029 21.1099 51.5722 21.351 51.957 21.6992C52.3419 22.0473 52.6287 22.4902 52.789 22.9838C52.9493 23.4773 52.9774 24.0043 52.8705 24.5121C52.7636 25.0199 52.5255 25.4908 52.1799 25.8779L43.3924 35.7128L44.7224 48.8347C44.7749 49.3514 44.6909 49.8728 44.4788 50.3469C44.2667 50.8209 43.934 51.2311 43.5138 51.5364C43.0937 51.8416 42.6008 52.0313 42.0844 52.0865C41.568 52.1417 41.0461 52.0605 40.5709 51.8509L28.5012 46.5309L16.4314 51.8509C15.9562 52.0605 15.4344 52.1417 14.9179 52.0865C14.4015 52.0313 13.9086 51.8416 13.4885 51.5364C13.0683 51.2311 12.7356 50.8209 12.5235 50.3469C12.3114 49.8728 12.2274 49.3514 12.2799 48.8347L13.6099 35.7128L4.8224 25.8803C4.4762 25.4932 4.23757 25.0221 4.13036 24.514C4.02315 24.0059 4.0511 23.4785 4.21142 22.9846C4.37174 22.4906 4.65882 22.0474 5.04401 21.6991C5.42919 21.3508 5.899 21.1096 6.40653 20.9997L19.298 18.2067L25.9362 6.81141Z" fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_300_918">
                                            <rect width="57" height="57" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <div className="pro-pac-og-card-text">
                                <div className="pro-pac-og-card-heading">
                                    Industry Recognized
                                </div>
                                <p className="pro-pac-og-card-about">
                                    Forge lasting connections with a global network of tech experts and experienced peers.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pro-pac-og-right">
                    <img src={Certiificate} alt="One Guarantee Card" className="pro-pac-guarantee-img" />
                    <p className="pro-pac-og-right-heading pro-pac-fw-400 pro-pac-text-black">
                        <span>{"Certificate of "}</span>
                        <span className="pro-pac-text-pink pro-pac-micro-interaction pro-pac-fw-600">
                        </span>
                    </p>
                </div>
            </div>
        </section>
    );
}

export default OneGuarantee;