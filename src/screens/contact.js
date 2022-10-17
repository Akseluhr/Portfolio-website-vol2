import React from "react";
import "animate.css";
import { useEffect, useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const API_KEY = process.env.API_KEY;
const TEMPLATE_ID = process.env.TEMPLATE_ID;
const SERVICE_ID = process.env.SERVICE_ID;

const ContactScreen = () => {
  const [time, setTime] = useState("");
  const [sky, setSymbol] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [err, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(form.current);
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, API_KEY).then(
      (result) => {
        setLoading(false);
        setError('');
      },
      (error) => {
        setLoading(false);
        setError("Could not send Email. Try again or contact me at akseluhr8@gmail.com");
      }
    );
    e.target.reset();
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
        setSymbol(weatherData[18].values[0]);
        setTime(currentTime);
      })
      .catch(err);
  });

  return (
    <div>
      <div className="fourthView">
        <div className="details">
          <h1>Current Aspires</h1>
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
          <h1>Current Projects</h1>
          <ul>
            <li>
              Project leader for THS Armada, managing other employees and
              companies
            </li>
            <li>
              Building a fullstack app which shows trending tech stacks based on
              job opening in T3 stack and postgres.
            </li>
            <li>
              Building a fullstack app which visualizes real-time data using in
              Kafka, Spark Streaming and React.
            </li>
            <li>Studying full time</li>
            <li>Learning to play the piano</li>
          </ul>
          <h1>Current Status</h1>
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
        <div className="fourthLeft">
          {success === true ? (
            <div class="alert-success">
              <span class="closebtn" onClick={() => setSuccess(false)}>
                &times;
              </span>
              <p>Message Sent! Talk to you soon.</p>{" "}
              <i style={{ fontSize:`36px` }} className="fa">
                &#xf087;
              </i>
            </div>
          ) : err !== '' ? (
            <div class="alert-failure">
              <span class="closebtn" onClick={() => setError('')}>
                &times;
              </span>
              <p>
                Message not sent. Try again or contact me on another service:
                akseluhr8@gmail.com.{" "}
              </p>
            </div>
          ) : (
            ""
          )}
          <h1> Contact </h1>
          <form ref={form} onSubmit={sendEmail}>
            <div className="flexInput">
              <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="from_name"
              placeholder="John Doe"
            />
            </div>
            <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="from_email"
              placeholder="Johndoe@acme.com"
            />
            </div>
            </div>
            <label htmlFor="msg">Message:</label>
            <textarea
              rows="10"
              id="msg"
              name="message"
              placeholder="Type anything!"
            ></textarea>
            {isLoading === true ? (
              <p>Sending...</p>
            ) : (
              <button
                type="submit"
                className="btn-type-one"
                disabled={isLoading}
              >
                Send
              </button>
            )}

            {/* disabled={isLoading} */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactScreen;
