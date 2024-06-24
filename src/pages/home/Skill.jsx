import React from 'react';
import '../../styles/skill.css'
const cards = [
    {
        icon: './sk1.png',
        text: 'CSS'
    },
    {
        icon: './sk2.png',
        text: 'HTML'
    },
    {
        icon: './sk3.png',
        text: 'React'
    },
    {
        icon: './sk4.png',
        text: 'Express.js'
    },
    {
        icon: './sk5.png',
        text: 'AI tools'
    },
    {
        icon: './sk6.png',
        text: 'MongoDB'
    },
    {
        icon: './sk7.png',
        text: 'JavaScript'
    },
    {
        icon: './sk8.png',
        text: 'Visual Studio Code'
    },
    {
        icon: './sk9.png',
        text: 'Node.js'
    }
]

function Skill(props) {
    return (
        <section className="pro-pac-section pro-pac-section-skill">
            <div className="pro-pac-skill">

                <h2 className="pro-pac-skill-heading pro-pac-f-48 pro-pac-fw-500 pro-pac-text-white pro-pac-text-center">
                    <span className="pro-pac-fw-700">Skills and tools </span>
                    {"you will learn"}
                </h2>
                <div className="pro-pac-skill-cards" >
                    {
                        cards.map((item, idx) => {
                            return (
                                <div className="pro-pac-skill-card" key={idx}>
                                    <div className="pro-pac-skill-card-inner">
                                        <div className="pro-pac-skill-card-icon">
                                            <img src={item.icon} alt={item.text} />
                                        </div>
                                        <div className="pro-pac-skill-card-text">
                                            {item.text}
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
}

export default Skill;