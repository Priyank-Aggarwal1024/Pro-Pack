import React, { useState } from 'react';
import '../../styles/paymentpage.css'
import Logo from '../../assets/logo.png'
import AddCourse from '../../components/reusable/AddCourse';
import Ci1 from '../../assets/ci1.png'
import Ci2 from '../../assets/ci2.png'
import Ci3 from '../../assets/ci3.png'
import Ci4 from '../../assets/ci4.png'
import Secure from '../../assets/secure.png'
import SSL from '../../assets/ssl.png'
import Razorpay from '../../assets/razorpay.png'
import Course from '../../components/reusable/Course';
import Ref100 from '../../assets/ref100.png'
import Curriculum from '../../components/reusable/Curriculum';
import CoupounApply from "../../components/reusable/CoupounApply";
function PaymentPage(props) {
    const addedCourse = [
        { name: "Course name ", price: "₹699" },
        { name: "Course name ", price: "₹699" }
    ]
    const courseList = [
        {
            name: `Data Management System`,
            price: "₹399",
            discount: "₹699",
            icon: Ci1
        }, {
            name: "Web Dev with PHP/MySQL",
            price: "₹399",
            discount: "₹699",
            icon: Ci2
        }, {
            name: "Python ",
            price: "₹399",
            discount: "₹699",
            icon: Ci3
        }, {
            name: "React Js",
            price: "₹399",
            discount: "₹699",
            icon: Ci4
        }
    ]
    const [viewCurriculum, setViewCurriculum] = useState(false)
    const [couponApply, setCouponApply] = useState(true);
    const [coupoun, setCoupoun] = useState("New60")
    return (
        <>
            {
                viewCurriculum ? <Curriculum setViewCurriculum={setViewCurriculum} /> : null
            }
            <div className="pro-pac-payment-top-outer" style={{ position: viewCurriculum && "fixed" }}>

                <nav className="pro-pac-payment-nav">
                    <div className="pro-pac-payment-nav-logo">
                        <img src={Logo} alt="TuteDude Logo" />
                    </div>
                    <div className="pro-pac-payment-nav-vertical-line"></div>
                    <div className="pro-pac-payment-nav-right">
                        Purchase Summary
                    </div>

                </nav>
                <main className="pro-pac-payment-main">
                    <div className="pro-pac-pm-left">
                        <div className="pro-pac-payment-save-small">You <span className="pro-pac-fw-600">saved ₹699</span> With Tutedude </div>
                        <div className="pro-pac-pml-top">
                            {
                                addedCourse.map((course, index) => <AddCourse key={index} index={index != addedCourse.length - 1} course={course} />)
                            }
                        </div>
                        <div className="pro-pac-pm-middle">
                            <div className="pro-pac-pmm-heading">
                                Other Course
                            </div>
                            <div className="pro-pac-pmm-courses">
                                {
                                    courseList.map((course, index) => <Course course={course} key={index} setViewCurriculum={setViewCurriculum} />)
                                }
                            </div>
                        </div>
                        <div className="pro-pac-pm-bottom pro-pac-pm-bottom-large">
                            <img src={SSL} alt="Secure SSL Encryption" />
                            <img src={Razorpay} alt="Razorpay" />
                            <img src={Secure} alt="Secure" />
                        </div>
                    </div>
                    <div className="pro-pac-pm-right">
                        <div className="pro-pac-pmr-top">

                            {
                                couponApply ? <div className="pro-pac-pmrt-coupounapply">
                                    <div className="pro-pac-pmrt-coupounapply-left">
                                        <p className="pro-pac-pmrtcl-head">{coupoun} <span className="pro-pac-pmrtclh-applied">Applied</span></p>
                                        <span className="pro-pac-pmrtcl-para">Save another ₹99 on this course   </span>
                                    </div>
                                    <span className="pro-pac-pmrt-coupounapply-right" onClick={() => setCouponApply(false)}>-Remove</span>
                                    <CoupounApply coupoun={coupoun} />
                                    {/* <coupo  coupon={coupon} /> */}
                                </div> :
                                    <div className="pro-pac-pmrt-coupounremove">
                                        <input type="text" name="coupoun" value={coupoun} placeholder="Enter Coupon Code Here " className="pro-pac-pmrt-coupounremove-input" onChange={(e) => setCoupoun(e.target.value)} />
                                        <div className="pro-pac-pmrt-coupounremove-text" onClick={() => setCouponApply(true)}>Apply</div>
                                    </div>
                            }
                        </div>
                        <div className="pro-pac-pmr-bottom">
                            <div className="pro-pac-pmrb-top">
                                <div className="pro-pac-pmrbt-left">
                                    <img src={Ref100} alt="100% Refund" />
                                </div>
                                <div className="pro-pac-pmrbt-right">
                                    <p className="pro-pac-pmrbtr-para1">for limited period only!!</p>
                                    <p className="pro-pac-pmrbtr-para2">You are now eligible for getting <b>100%</b> of your enrollment fee back on your course completion.</p>
                                </div>
                            </div>
                            <div className="pro-pac-pmrb-bottom">
                                <p className="pro-pac-pmrbb-total"><span>Total</span><span><b>₹1,000</b></span></p>
                                {
                                    couponApply ?
                                        <><p className="pro-pac-pmrbb-feedback"><span>Feedback</span><span>Applied </span></p>
                                            <p className="pro-pac-pmrbb-coupoun"><span>Coupon Discount</span><span className="pro-pac-pmrbb-coupoun-discount">Rs 0</span></p></> : null
                                }
                                <div className="pro-pac-pmrbb-proceed-pay pro-pac-proceed-pay-large">
                                    <span>Proceed to pay</span>
                                    <span className="pro-pac-proceed-vertical"></span>
                                    <span><b>₹699</b></span>
                                </div>
                            </div>

                        </div>

                    </div>

                </main>

                <div className="pro-pac-pm-bottom pro-pac-pm-bottom-small">
                    <img src={SSL} alt="Secure SSL Encryption" />
                    <img src={Razorpay} alt="Razorpay" />
                    <img src={Secure} alt="Secure" />
                </div>
                <div className="pro-pac-proceed-pay-outer pro-pac-proceed-pay-small">
                    <div className="pro-pac-pmrbb-proceed-pay">
                        <span>Proceed to pay</span>
                        <span className="pro-pac-proceed-vertical"></span>
                        <span><b>₹699</b></span>
                    </div>
                </div>

            </div>
        </>
    );
}

export default PaymentPage;