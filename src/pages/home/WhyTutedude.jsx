import React from 'react';
import Course from '../../assets/course.png'
import Learning from '../../assets/learning.png'
import Mentor from '../../assets/mentor.png'
import Projects from '../../assets/projects.png'
import Internship from '../../assets/internship.png'
import CourseAccess from '../../assets/courseAccess.png'
import '../../styles/whytutedude.css'
function WhyTutedude(props) {
    return (
        <>
            <section className="pro-pac-why-ch-section pro-pac-why-choose">
                <h2 className="pro-pac-why-choose-heading pro-pac-why-choose-400 pro-pac-why-choose-text-center pro-pac-why-choose-f-48">
                    Why <span className="pro-pac-why-choose-text-pink pro-pac-why-choose-fw-700">Tutedude ?</span>
                </h2>
                <div className="pro-pac-why-choose-cards">
                    <div className="pro-pac-why-choose-card pro-pac-why-choose-card1">
                        <div className="pro-pac-why-choose-card-left">
                            <img src={Learning} alt="100% Free Learning" />
                        </div>
                        <div className="pro-pac-why-choose-card-right">
                            <div className="pro-pac-why-choose-cr-top">
                                <h3 className="pro-pac-why-choose-card-heading">100% Free Learning</h3>
                            </div>
                            <div className="pro-pac-why-choose-cr-bottom">
                                <p className="pro-pac-why-choose-card-text">On the courses enrolled within the 100% FeesBack offer through which you earn your enrollment fee back as reward</p>
                                <div className="pro-pac-why-choose-card-no">1</div>
                            </div>
                        </div>
                    </div>
                    <div className="pro-pac-why-choose-card pro-pac-why-choose-card2">
                        <div className="pro-pac-why-choose-card-left">
                            <img src={Course} alt="Structured Course" />
                        </div>
                        <div className="pro-pac-why-choose-card-right">
                            <div className="pro-pac-why-choose-cr-top">
                                <h3 className="pro-pac-why-choose-card-heading">Structured Course</h3>
                            </div>
                            <div className="pro-pac-why-choose-cr-bottom">
                                <p className="pro-pac-why-choose-card-text">Learn from our structured pre recorded courses made by experts to meet industry needs</p>
                                <div className="pro-pac-why-choose-card-no">2</div>
                            </div>
                        </div>
                    </div>
                    <div className="pro-pac-why-choose-card pro-pac-why-choose-card3">
                        <div className="pro-pac-why-choose-card-left">
                            <img src={Mentor} alt="Instant Mentor Support" />
                        </div>
                        <div className="pro-pac-why-choose-card-right">
                            <div className="pro-pac-why-choose-cr-top">
                                <h3 className="pro-pac-why-choose-card-heading">Instant Mentor Support</h3>
                            </div>
                            <div className="pro-pac-why-choose-cr-bottom">
                                <p className="pro-pac-why-choose-card-text">Personal mentors to guide and help you throughout your journey as a friend through chat, calls & screen sharing</p>
                                <div className="pro-pac-why-choose-card-no">3</div>
                            </div>
                        </div>
                    </div>
                    <div className="pro-pac-why-choose-card pro-pac-why-choose-card4">
                        <div className="pro-pac-why-choose-card-left">
                            <img src={Projects} alt="Projects & Certifications" />
                        </div>
                        <div className="pro-pac-why-choose-card-right">
                            <div className="pro-pac-why-choose-cr-top">
                                <h3 className="pro-pac-why-choose-card-heading">Projects & Certifications</h3>
                            </div>
                            <div className="pro-pac-why-choose-cr-bottom">
                                <p className="pro-pac-why-choose-card-text">Build major projects which makes your resume stand apart alongwith course completion certifications</p>
                                <div className="pro-pac-why-choose-card-no">4</div>
                            </div>
                        </div>
                    </div>
                    <div className="pro-pac-why-choose-card pro-pac-why-choose-card5">
                        <div className="pro-pac-why-choose-card-left">
                            <img src={Internship} alt="Internship Opportunities" />
                        </div>
                        <div className="pro-pac-why-choose-card-right">
                            <div className="pro-pac-why-choose-cr-top">
                                <h3 className="pro-pac-why-choose-card-heading">Internship Opportunities</h3>
                            </div>
                            <div className="pro-pac-why-choose-cr-bottom">
                                <p className="pro-pac-why-choose-card-text">Get remote internship opportunities after the completion of the course along with dedicated assignmnets</p>
                                <div className="pro-pac-why-choose-card-no">5</div>
                            </div>
                        </div>
                    </div>
                    <div className="pro-pac-why-choose-card pro-pac-why-choose-card6">
                        <div className="pro-pac-why-choose-card-left">
                            <img src={CourseAccess} alt="Lifetime Course Access" />
                        </div>
                        <div className="pro-pac-why-choose-card-right">
                            <div className="pro-pac-why-choose-cr-top">
                                <h3 className="pro-pac-why-choose-card-heading">Lifetime Course Access</h3>
                            </div>
                            <div className="pro-pac-why-choose-cr-bottom">
                                <p className="pro-pac-why-choose-card-text">Get lifetime course access on each curse that you enroll, and njoy the benefit of mentoring whenever you want</p>
                                <div className="pro-pac-why-choose-card-no">6</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default WhyTutedude;