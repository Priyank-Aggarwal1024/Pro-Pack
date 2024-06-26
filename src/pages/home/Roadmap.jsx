import React from 'react';
import '../../styles/roadmap.css'
import CurriculumBtn from '../../components/reusable/CurriculumBtn';
import Duration from '../../components/reusable/Duration';
import Python from '../../assets/python.png'
import Ethical from '../../assets/ethical.png'
import Java from '../../assets/java.png'
import Mern from '../../assets/mernstack.png'
import DS from '../../assets/datascience.png'
import ISC from '../../assets/isc.png'
import PBL from '../../assets/pbl.png'
import IDS from '../../assets/ids.png'
import DPS from '../../assets/dps.png'

function Roadmap(props) {
    return (
        <section className="pro-pac-section pro-pac-section-roadmap">
            <div className="pro-pac-roadmap">
                <div className="pro-pac-roadmap-heading pro-pac-f-48 pro-pac-fw-500 pro-pac-text-center">
                    <p>Tech Geeks </p>
                    <p className="pro-pac-fw-700"> Courses Curriculum</p>
                </div>
                <div className="pro-pac-roadmap-icons-outer">
                    <div className="pro-pac-roadmap-icons">
                        <div className="pro-pac-roadmap-icon">
                            <div className="pro-pac-ri-left">
                                <img src={ISC} alt="Industry standard courses" />
                            </div>
                            <span className="pro-pac-ri-right">Industry standard courses</span>
                        </div>
                        <div className="pro-pac-roadmap-icon">
                            <div className="pro-pac-ri-left">
                                <img src={PBL} alt="Project based Learning" />

                            </div>
                            <span className="pro-pac-ri-right">Project based Learning</span>
                        </div>
                        <div className="pro-pac-roadmap-icon">
                            <div className="pro-pac-ri-left">
                                <img src={IDS} alt="Instant Doubt Support" />

                            </div>
                            <span className="pro-pac-ri-right">Instant Doubt Support</span>
                        </div>
                        <div className="pro-pac-roadmap-icon">
                            <div className="pro-pac-ri-left">
                                <img src={DPS} alt="Dedicated Placement Support" />

                            </div>
                            <span className="pro-pac-ri-right">Dedicated Placement Support</span>
                        </div>
                    </div>
                </div>
                <div className="pro-pac-roadmap-card-top">
                    <div className="pro-pac-rct-l">
                        <div className="pro-pac-card-num-div">
                            <div className="pro-pac-card-num"><p>1</p></div>
                        </div>
                        <div className="pro-pac-card-num-div">
                            <div className="pro-pac-card-num"><p>2</p></div>
                        </div>
                        <div className="pro-pac-card-num-div">
                            <div className="pro-pac-card-num"><p>3</p></div>
                        </div>
                        <div className="pro-pac-card-num-div pro-pac-card-num-div-4">
                            <div className="pro-pac-card-num"><p>4</p></div>
                        </div>
                        <div className="pro-pac-card-num-div">
                            <div className="pro-pac-card-num"><p>5</p></div>
                        </div>
                        <div className="pro-pac-card-num-div pro-pac-card-num-div-4">
                            <div className="pro-pac-card-num"><p>6</p></div>
                        </div>
                    </div>
                    <div className="pro-pac-rct-m">
                        <div className="pro-pac-rct-m-1"><div className="pro-pac-roadmap-vertical-line"></div></div>
                        <div className="pro-pac-rct-m-2"><div className="pro-pac-roadmap-vertical-line"></div></div>
                        <div className="pro-pac-rct-m-3"><div className="pro-pac-roadmap-vertical-line"></div></div>
                        <div className="pro-pac-rct-m-4"><div className="pro-pac-roadmap-vertical-line"></div></div>
                        <div className="pro-pac-rct-m-5"><div className="pro-pac-roadmap-vertical-line"></div></div>
                        <div className="pro-pac-rct-m-6"></div>
                    </div>
                    <div className="pro-pac-rct-r">
                        {/* <div className="pro-pac-rct-r-card-outer"> */}
                        <div className="pro-pac-rct-r-1 pro-pac-rct-r-card">
                            <div className="pro-pac-rct-r-card-design pro-pac-rct-r-card-design1"></div>

                            <div className="pro-pac-rct-r-1">
                                <div className="pro-pac-rct-r--l">
                                    <img src={Python} alt="Python" />
                                </div>
                                <div className="pro-pac-rct-r--m">
                                    <span className="pro-pac-rct-r--m-heading">
                                        Python
                                    </span>
                                    <Duration text="Duration: 38h 54m" />

                                </div>
                            </div>
                            <div className="pro-pac-rct-r--r pro-pac-roadcurr1">
                                <CurriculumBtn />
                            </div>
                        </div>
                        {/* </div> */}

                        <div className="pro-pac-rct-r-2 pro-pac-rct-r-card">
                            <div className="pro-pac-rct-r-card-design pro-pac-rct-r-card-design2"></div>

                            <div className="pro-pac-rct-r-1">
                                <div className="pro-pac-rct-r--l">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="78" height="79" viewBox="0 0 78 79" fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M55.1836 42.5703L55.0584 42.6955L46.9915 47.6687C46.649 47.8799 46.2366 47.9464 45.845 47.8535C45.4535 47.7607 45.1149 47.5161 44.9037 47.1736C44.6925 46.831 44.626 46.4187 44.7188 46.0271C44.8117 45.6356 45.0563 45.2969 45.3988 45.0857L53.0802 40.35C53.0878 40.3217 53.0878 40.2918 53.0802 40.2635L45.3988 35.5278C45.2247 35.4254 45.0728 35.2893 44.952 35.1274C44.8312 34.9656 44.7439 34.7812 44.6952 34.5852C44.6466 34.3892 44.6376 34.1855 44.6687 33.9859C44.6998 33.7863 44.7704 33.595 44.8764 33.4231C44.9824 33.2512 45.1217 33.1022 45.286 32.9848C45.4503 32.8674 45.6364 32.784 45.8334 32.7394C46.0304 32.6949 46.2343 32.6901 46.4332 32.7253C46.632 32.7606 46.8219 32.8352 46.9915 32.9448L55.0584 37.918L55.1836 38.0432C55.7827 38.6442 56.1192 39.4582 56.1192 40.3067C56.1192 41.1553 55.7827 41.9693 55.1836 42.5703ZM34.7436 53.7483C34.6744 53.9371 34.5685 54.1103 34.4318 54.2578C34.2951 54.4052 34.1305 54.5241 33.9475 54.6074C33.7645 54.6908 33.5668 54.7369 33.3658 54.7432C33.1648 54.7494 32.9646 54.7157 32.7767 54.6439C32.5889 54.5721 32.4172 54.4637 32.2717 54.325C32.1261 54.1862 32.0095 54.02 31.9288 53.8358C31.848 53.6517 31.8046 53.4533 31.8012 53.2523C31.7978 53.0512 31.8343 52.8515 31.9087 52.6647L41.7732 26.8652C41.8424 26.6764 41.9484 26.5032 42.085 26.3557C42.2217 26.2082 42.3863 26.0894 42.5693 26.0061C42.7523 25.9227 42.9501 25.8766 43.151 25.8703C43.352 25.8641 43.5522 25.8978 43.7401 25.9696C43.9279 26.0414 44.0996 26.1498 44.2451 26.2885C44.3907 26.4273 44.5073 26.5935 44.588 26.7777C44.6688 26.9618 44.7122 27.1602 44.7156 27.3612C44.7191 27.5623 44.6825 27.762 44.6081 27.9488L34.7436 53.7483ZM30.3205 47.8948C30.0489 47.8948 29.7734 47.822 29.5253 47.6687L21.4584 42.6955L21.3332 42.5703C20.7341 41.9693 20.3976 41.1553 20.3976 40.3067C20.3976 39.4582 20.7341 38.6442 21.3332 38.0432L21.4584 37.918L29.5253 32.9448C29.8678 32.7336 30.2802 32.6671 30.6718 32.7599C31.0633 32.8528 31.4019 33.0974 31.6131 33.4399C31.8244 33.7824 31.8909 34.1948 31.798 34.5864C31.7051 34.9779 31.4606 35.3166 31.118 35.5278L23.4366 40.2635C23.429 40.2918 23.429 40.3217 23.4366 40.35L31.118 45.0857C31.3991 45.2592 31.616 45.5196 31.7356 45.8275C31.8552 46.1354 31.8712 46.4739 31.7809 46.7917C31.6907 47.1094 31.4993 47.3891 31.2357 47.5882C30.9722 47.7873 30.6508 47.8949 30.3205 47.8948ZM38.2584 16.0249C24.848 16.0249 13.9766 26.8963 13.9766 40.3067C13.9766 53.7172 24.848 64.5886 38.2584 64.5886C51.6688 64.5886 62.5402 53.7172 62.5402 40.3067C62.5402 26.8963 51.6688 16.0249 38.2584 16.0249Z" fill="#800080" />
                                    </svg>
                                </div>
                                <div className="pro-pac-rct-r--m">
                                    <span className="pro-pac-rct-r--m-heading">
                                        App Development
                                    </span>

                                    <Duration text="Duration: 34h 37m" />


                                </div>
                            </div>
                            <div className="pro-pac-rct-r--r pro-pac-roadcurr2">
                                <CurriculumBtn color={true} />

                            </div>
                        </div>
                        <div className="pro-pac-rct-r-3 pro-pac-rct-r-card">
                            <div className="pro-pac-rct-r-card-design pro-pac-rct-r-card-design3"></div>

                            <div className="pro-pac-rct-r-1">
                                <div className="pro-pac-rct-r--l">
                                    <img src={Ethical} alt="Ethical Hacking" />

                                </div>
                                <div className="pro-pac-rct-r--m">
                                    <span className="pro-pac-rct-r--m-heading">
                                        Ethical Hacking
                                    </span>

                                    <Duration text="Duration: 17h 25m" />


                                </div>
                            </div>
                            <div className="pro-pac-rct-r--r pro-pac-roadcurr3">
                                <CurriculumBtn />
                            </div>
                        </div>
                        <div className="pro-pac-rct-r-4 pro-pac-rct-r-card">
                            <div className="pro-pac-rct-r-card-design pro-pac-rct-r-card-design4"></div>

                            <div className="pro-pac-rct-r-1">
                                <div className="pro-pac-rct-r--l">
                                    <img src={Java} alt="Java" />

                                </div>
                                <div className="pro-pac-rct-r--m">
                                    <span className="pro-pac-rct-r--m-heading">
                                        Java
                                    </span>
                                    <Duration text="Duration: 29h 57m" />

                                </div>
                            </div>
                            <div className="pro-pac-rct-r--r pro-pac-roadcurr4">
                                <CurriculumBtn />
                            </div>
                        </div>
                        <div className="pro-pac-rct-r-5 pro-pac-rct-r-card">
                            <div className="pro-pac-rct-r-card-design pro-pac-rct-r-card-design5"></div>

                            <div className="pro-pac-rct-r-1">
                                <div className="pro-pac-rct-r--l">
                                    <img src={DS} alt="Data Science" />

                                </div>
                                <div className="pro-pac-rct-r--m">
                                    <span className="pro-pac-rct-r--m-heading">
                                        Data Science
                                    </span>
                                    <Duration text="Duration: 19h 52m" />


                                </div>
                            </div>
                            <div className="pro-pac-rct-r--r pro-pac-roadcurr5 ">
                                <CurriculumBtn />
                            </div>
                        </div>
                        <div className="pro-pac-rct-r-6 pro-pac-rct-r-card">
                            <div className="pro-pac-rct-r-card-design pro-pac-rct-r-card-design6"></div>

                            <div className="pro-pac-rct-r-1">
                                <div className="pro-pac-rct-r--l">
                                    <img src={Mern} alt="Mern Stack" />

                                </div>
                                <div className="pro-pac-rct-r--m">
                                    <span className="pro-pac-rct-r--m-heading">
                                        MERN Stack
                                    </span>
                                    <Duration text="Duration: 55h 23m" />


                                </div>
                            </div>
                            <div className="pro-pac-rct-r--r pro-pac-roadcurr6">
                                <CurriculumBtn />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Roadmap;