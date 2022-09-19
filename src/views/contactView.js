import React from "react";
import "animate.css";
import { useEffect, useState, useRef } from "react";
import {
  SERVICE_ID,
  TEMPLATE_ID,
  API_KEY,
} from "/Users/akseluhr/Documents/GitHub/Portfolio-website-vol2/src/apiConfig.js";
import emailjs from "@emailjs/browser";

const ContactView = () => {
  const [celsius, setCelsius] = useState("");
  const [rain, setRain] = useState("");
  const [time, setTime] = useState("");
  const [sky, setSymbol] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [err, setErr] = useState(false);
  const [success, setSuccess] = useState(false)
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true)
    console.log(form.current);
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, API_KEY).then(
      (result) => {
        console.log("rest text", result.text);
        setLoading(false)
        setErr(true)

        //setSuccess(true)
      },
      (error) => {
        console.log(error.text);
        setLoading(false)
        setErr(true)
      }
    );
    e.target.reset()
  };

  useEffect(() => {
    fetch(
      "https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/18.0817/lat/59.3242/data.json"
    )
      .then((res) => res.json())
      .then((data) => {
        //Latest data update
        const weatherData = data.timeSeries[0].parameters;
        var today = new Date();
        var currentTime = today.getHours();
        //Celsius
        setCelsius(weatherData[10].values[0]);

        setRain(weatherData[2].values[0]);
        setSymbol(weatherData[18].values[0]);
        setTime(currentTime);
      })
      .catch(err);
  }, []);

  return (
    <div>
      <div className="fourthView">
        <div className="fourthLeft">
        {success === true ? 
        <div class="alert-success">
          <span class="closebtn" onClick={() => setSuccess(false)}>&times;</span>
         Message Sent! Talk to you soon. <i style="font-size:24px" class="fa">&#xf087;</i>
          </div> 
          : err === true ?
          <div class="alert-failure">
          <span class="closebtn" onClick={() => setErr(false)}>&times;</span>
         Message not sent. Try again or contact me on another service: akseluhr8@gmail.com. 
          </div> : ''
        }
          <h1 className="animate__animated animate__slideInUp"> Contact </h1>
          <form ref={form} onSubmit={sendEmail}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="from_name"
              placeholder="Your name.."
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="from_email"
              placeholder="Your Email.."
            />
            <label htmlFor="msg">Message</label>
            <textarea
              rows="10"
              id="msg"
              name="message"
              placeholder="Your message.."
            ></textarea>
            {isLoading === true ? 
            <p>Sending...</p> :  
            <button type="submit" className="btn-type-one" disabled={isLoading}>
            Send
            </button>
            }

            {/* disabled={isLoading} */}
          </form>
        </div>

        <div className="details">
          <h2>Current Aspires</h2>
          <ul>
            <li>
              Find a Master Thesis topic within ML/Data Science for a company
            </li>
            <li>
              Find a full time position after graduation within ML/Data
              Science/Full Stack development
            </li>
            <li>Keep enjoying life :)</li>
          </ul>
          <h2>Current Projects</h2>
          <ul>
            <li>
              Project leader for THS Armada, managing other employees and
              companies
            </li>
            <li>
              Building a full stack recommendation system in python and react.js
            </li>
            <li>Studying full time</li>
            <li>Learning to play the piano</li>
          </ul>
          <h2>Current Status</h2>
          <ul>
            <li>
              Stockholm:
              {time < 20 && time > 8 && sky <= 4 ? (
                <span className="status">&#127774;</span>
              ) : time < 20 && time > 8 && sky > 5 ? (
                <span className="status">&#127783; </span>
              ) : (
                <span className="status">&#127773;</span>
              )}
              {time < 20 && time > 8 && sky <= 4 ? (
                <span className="status">Sun! See you outdoors</span>
              ) : time < 20 && time > 8 && sky > 5 ? (
                <span className="status"> Rain outdoors! Movie time</span>
              ) : (
                <span className="status"> Sleepy Time. Good Night!</span>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactView;
