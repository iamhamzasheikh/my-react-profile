import React, { useState } from 'react';
import './Hero.css';
import profile_hamza_img from '../../assets/profile_hamza_img.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import resumepdf from '../../assets/Hamza_Sheikh_Resume.pdf';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const Hero = () => {
    const [isTypingDone, setIsTypingDone] = useState(false);

    const [text] = useTypewriter({
        words: ['I am Hamza Sheikh'],
        typeSpeed: 100,
        onLoopDone: () => {
            setIsTypingDone(true); // When typing is complete, we set this to true
        },
    });

    const handleResumeDownload = () => {
        const resumeUrl = resumepdf;
        const link = document.createElement('a');
        link.href = resumeUrl;
        link.download = 'Hamza_Sheikh_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className='hero-section' id='home'>
            <img src={profile_hamza_img} alt="" />

            {/* Typing animation for "I am Hamza Sheikh" */}
            <h1>
                <span>{text}</span>
                {!isTypingDone && <Cursor />} {/* Cursor disappears once typing is done */},
                frontend developer based in Pakistan.
            </h1>

            <p>I am a frontend developer from Lahore, Pakistan with 3 years of experience in multiple companies.</p>

            <div className="hero-action-btn">
                <div className="hero-connect-btn">
                    <AnchorLink style={{ textDecoration: 'none', color: 'white' }} className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink>
                </div>
                <div className="hero-resume-btn" onClick={handleResumeDownload}>My Resume</div>
            </div>
        </div>
    );
};

export default Hero;
