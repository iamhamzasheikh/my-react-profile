import React, { useRef, useState } from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import { Bounce, toast } from 'react-toastify';

const Contact = () => {
  const formRef = useRef(null);
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const validateName = (name) => {
    return name.length >= 3;
  };

  const validateMessage = (message) => {
    return message.split(/\s+/).filter(Boolean).length >= 20;
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    // const newErrors = {};
    // if (!validateName(name)) newErrors.name = "Name must be at least 3 characters long.";
    // if (!validateEmail(email)) newErrors.email = "Please enter a valid email address.";
    // if (!validateMessage(message)) newErrors.message = "Message must be at least 20 words long.";

    const newErrors = {};
    if (!validateName(name)) {
      newErrors.name = "Name must be at least 3 characters long.";
      toast.error(newErrors.name, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        transition: Bounce,
      });
    }
    if (!validateEmail(email)) {
      newErrors.email = "Please enter a valid email address.";
      toast.error(newErrors.email, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        transition: Bounce,
      });
    }
    if (!validateMessage(message)) {
      newErrors.message = "Message must be at least 20 words long.";
      toast.error(newErrors.message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        transition: Bounce,
      });
    }
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return; // Don't submit if there are errors
    }

    try {
      formData.append("access_key", "05280333-ed3c-4e07-9fb1-8d7a18eda775");

      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });

      const result = await res.json();

      if (result.success) {
        // console.log("Success", result);
        toast.success("Form submitted successfully!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          transition: Bounce,
        });
        formRef.current.reset();
        setErrors({});
      } else {
        console.error("Submission failed", result);
        toast.error("Failed to submit form. Please try again later.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          transition: Bounce,
        });
        setErrors({});
        return; // Don't submit if there's a submission error (API call failed)
      }
    } catch (error) {
      console.error("Error submitting the form", error);
      toast.error("Failed to submit form.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        transition: Bounce,
      })
    }
  };

  return (
    <div className='contact' id='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>I'm currently available to take on new projects,
            so feel free to send me a message about anything that you want me to work on.
            You can contact anytime.
          </p>
          <div className="contact-details">
            <div className="detail"><img src={mail_icon} alt="" /> <p>zafarhamza789@gmail.com</p></div>
            <div className="detail"><img src={call_icon} alt="" /> <p>+923360639358</p></div>
            <div className="detail"><img src={location_icon} alt="" /><p>Pakistan,Lahore</p></div>
          </div>
        </div>

        <form ref={formRef} onSubmit={onSubmit} className='contact-right'>
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" placeholder='Enter your Name' name='name' required />
          {/* {errors.name && <span style={{ color: 'red', fontWeight: 'bolder' }} className="error">{errors.name}</span>} */}

          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" placeholder='Enter your Email' name='email' required />
          {/* {errors.email && <span style={{ color: 'red', fontWeight: 'bolder' }} className="error">{errors.email}</span>} */}

          <label htmlFor="message">Write your message here</label>
          <textarea id="message" name="message" rows='8' placeholder='Enter your Message' required></textarea>
          {/* {errors.message && <span style={{ color: 'red', fontWeight: 'bolder' }} className="error">{errors.message}</span>} */}

          <button className='contact-submit' type='submit'>Submit now</button>
        </form>
      </div>
    </div>
  )
}

export default Contact