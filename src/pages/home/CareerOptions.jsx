import React from 'react';
import '../../styles/careeroption.css'
import AD from '../../assets/appdev.png'
import FD from '../../assets/fsdev.png'
import EH from '../../assets/ethicalhacker.png'
import DS from '../../assets/dscience.png'

function CareerOptions(props) {
    return (
        <section className="pro-pac-section pro-pac-carreroption">
            <div className="pro-pac-carreroption-heading pro-pac-f-48">
                <p className="pro-pac-fw-400 pro-pac-text-black pro-pac-text-center">Top Career <span className="pro-pac-fw-700 pro-pac-text-pink">Option in</span></p>
                <p className="pro-pac-fw-700 pro-pac-text-pink pro-pac-text-center">Tech Geeks</p>
                <div className="pro-pac-co-cards">
                    <div className="pro-pac-co-card">
                        <div className="pro-pac-co-icon">
                            <img src={FD} alt="Full stack developer" />
                        </div>
                        <div className="pro-pac-co-heading">Full stack developer</div>
                        <div className="pro-pac-co-text">Build And Maintain Web Applications Using The MERN Stack (MongoDB, Express.Js, React, Node.Js).</div>
                    </div>
                    <div className="pro-pac-co-card">
                        <div className="pro-pac-co-icon">
                            <img src={DS} alt="Data Science" />
                        </div>
                        <div className="pro-pac-co-heading">Data Science</div>
                        <div className="pro-pac-co-text">Design, Develop, And Test Machine Learning Systems And Implement ML Algorithms.</div>
                    </div>
                    <div className="pro-pac-co-card">
                        <div className="pro-pac-co-icon">
                            <img src={EH} alt="Ethical hacker" />
                        </div>
                        <div className="pro-pac-co-heading">Ethical hacker</div>
                        <div className="pro-pac-co-text">Identify And Mitigate Security Threats By Testing And Securing Computer Systems.</div>
                    </div>
                    <div className="pro-pac-co-card">
                        <div className="pro-pac-co-icon">
                            <img src={AD} alt="App Development" />
                        </div>
                        <div className="pro-pac-co-heading">App Development</div>
                        <div className="pro-pac-co-text">Identify And Mitigate Security Threats By Testing And Securing Computer Systems</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CareerOptions;