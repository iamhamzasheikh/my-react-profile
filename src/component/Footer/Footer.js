import React, { useState } from 'react';
import './Footer.css';
import user_icon from '../../assets/user_icon.svg';
import { db } from '../../Firebase';
import { collection, addDoc } from 'firebase/firestore';
import { toast } from 'react-toastify'; // Import toast for notifications


const Footer = () => {
    const [email, setEmail] = useState(''); // State to hold the email input

    // CHANGE: Added strong email validation regex
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    // CHANGE: Added email validation function
    const validateEmail = (email) => {
        if (!email) {
            toast.error('Email is required');
            return false;
        }
        if (!emailRegex.test(email)) {
            toast.error('Please enter a valid email address');
            return false;
        }
        return true;
    };

    // CHANGE: Updated email change handler
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };


    const handleSubscribe = async (e) => {
        e.preventDefault();

        if (!email) {
            toast.error('Please enter a valid email address.'); // Show error message
            return;
        }

        try {
            // Add the email to Firestore
            // console.log("Attempting to save email: ", email); // Log the attempt
            await addDoc(collection(db, 'Emails'), { // Make sure the collection name matches
                email: email,
                subscribedAt: new Date() // Optional: timestamp for when the email was subscribed
            });
            toast.success('Subscription successful!'); // Show success message
            setEmail(''); // Clear the email input field
        } catch (error) {
            console.error('Error saving email: ', error);
            toast.error('Subscription failed. Please try again.'); // Show error message
        }
    };


    return (
        <div className='footer'>
            {/* footer-top */}
            <div className="footer-top">
                <div className="footer-top-left-side">
                    <h2>Hamza Sheikh</h2>
                    <p>I am a frontend developer from,
                        Pakistan with 3 years of experience in multiple companies.</p>
                </div>

                <div className="footer-top-right-side">
                    <div className="footer-email-input">
                        <img src={user_icon} alt="user_icon" />

                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder='Enter you email'
                            value={email}
                            onChange={handleEmailChange}
                            onBlur={() => validateEmail(email)}
                            required
                            pattern="[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}"
                        />
                    </div>
                    <button className='footer-btn' type="submit" onClick={handleSubscribe}>Subscribe</button>
                </div>
            </div>

            <hr />

            {/* footer-bottom */}

            <div className="footer-bottom">
                <p className='footer-bottom-left'>© 2024 Hamza Sheikh. All rights reserved.</p>
                <div className="footer-bottom-right">
                    <a href="/">Privacy Policy</a>
                    <a href="/">Terms & Conditions</a>
                    <a href="/">Contact Us</a>
                </div>
            </div>
        </div>
    )
}

export default Footer
