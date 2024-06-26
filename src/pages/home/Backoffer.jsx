import React from 'react';
import '../../styles/backoffer.css'
import O1 from '../../assets/offer1.gif'
import O2 from '../../assets/offer2.gif'
import O3 from '../../assets/offer3.gif'
function Backoffer(props) {
    return (
        <section className="pro-pac-backoffer-section">
            <div className="pro-pac-backoffer">
                <div className="pro-pac-back-offer-heading">
                    <p className="pro-pac-f-48 pro-pac-fw-400 pro-pac-text-white pro-pac-text-center"><span className="pro-pac-fw-700">A limited</span> seats opportunity for</p>
                    <p className="pro-pac-f-48 pro-pac-fw-400 pro-pac-text-white pro-pac-text-center">Fees <span className="pro-pac-fw-700">Back Offer</span></p>
                </div>
                <div className="pro-pac-backoffer-bottom">
                    <div className="pro-pac-backoffer-left">
                        <div className="pro-pac-bol-card pro-pac-bol-card1">
                            <div className="pro-pac-bol-card-left">
                                <img src={O1} alt="Enroll" />
                            </div>
                            <div className="pro-pac-bol-card-middle">
                                <div className="pro-pac-bol-card-heading">Enroll </div>
                                <div className="pro-pac-bol-card-text">Enroll into your favorite  Course by paying <b>₹1999</b></div>
                            </div>
                            <div className="pro-pac-bol-card-right">1</div>
                        </div>
                        <div className="pro-pac-bol-card pro-pac-bol-card2">
                            <div className="pro-pac-bol-card-left">
                                <img src={O2} alt="Course" />
                            </div>
                            <div className="pro-pac-bol-card-middle">
                                <div className="pro-pac-bol-card-heading">Complete Course </div>
                                <div className="pro-pac-bol-card-text">With all the lectures and <b>Assignments.</b></div>
                            </div>
                            <div className="pro-pac-bol-card-right">2</div>
                        </div>
                        <div className="pro-pac-bol-card pro-pac-bol-card3">
                            <div className="pro-pac-bol-card-left">
                                <img src={O3} alt="Payment" />
                            </div>
                            <div className="pro-pac-bol-card-middle">
                                <div className="pro-pac-bol-card-heading">100% Refund awarded</div>
                                <div className="pro-pac-bol-card-text">Get <b>100% Fees back</b> will return in your source bank account.</div>
                            </div>
                            <div className="pro-pac-bol-card-right">3</div>
                        </div>
                    </div>
                    <div className="pro-pac-backoffer-right">
                        <div className="pro-pac-backoffer-right-inner">
                            <div className="pro-pac-bor-top">Duration of course </div>
                            <div className="pro-pac-bor-bottom">
                                <ol>
                                    <li>Get <b>lifetime course</b> access, Even after getting <b>100% refund.</b></li>
                                    <li>For <b>100% refund</b> complete course within <b>24 months. </b></li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Backoffer;