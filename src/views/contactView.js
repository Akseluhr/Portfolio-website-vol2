import React from 'react'
import 'animate.css';

const ContactView = () => {
    return (
        <div>

            <div className='fourthView'>
                <div className='fourthLeft'>
                    <h1 className='animate__animated animate__slideInUp'> Contact </h1>

                    <form action="/action_page.php">
                        <label for="name">Name</label>
                        <input type="text" id="name" name="name" placeholder="Your name.." />

                        <label for="email">Email</label>
                        <input type="text" id="email" name="email" placeholder="Your Email.." />
                        <label for="msg">Message</label>

                        <textarea rows='10' id='msg' placeholder='Your message..'></textarea>
                        <button className='btn-type-one animate__animated animate__slideInUp'>Send</button>
                    </form>

                </div>
      
                <div className='details'>
                    <h2>Current Aspires</h2>
                    <ul>
                        <li>Find a Master Thesis topic within ML/Data Science for a company</li>
                        <li>Find a full time position after graduation within ML/Data Science/Full Stack development</li>
                        <li>Keep enjoying life :)</li>

                    </ul>
                    <h2>Current Projects</h2>
                    <ul>
                        <li>Project leader for THS Armada, managing other employees and companies</li>
                        <li>Building a full stack recommendation system in python and react.js</li>
                        <li>Studying full time</li>
                        <li>Learning to play the piano</li>
                    </ul>
                    <h2>Current Status</h2>
                    <ul>
                        <li>Weather Data Goes HEre</li>

                    </ul>
                </div>
            </div>

        </div>
    )
}

export default ContactView