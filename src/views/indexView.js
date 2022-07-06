import React from 'react'
import 'animate.css';
import { Link } from 'react-scroll';

const IndexView = () => {
    return (
        <div>
            <div>
                <nav>
                    <ul className='navbar'>
                        <li><a href='#about'>ABOUT</a></li>
                        <li><a href="#projects">PROJECTS</a></li>
                        <li><a href="#contact">CONTACT</a></li>
                    </ul>
                </nav>
            </div>
            <div className='firstView'>
                <div className='firstLeft animate__animated animate__slideInUp'>

                    <h1> aksel uhr.</h1>
                    <p className='pitch'>Social and driven Software Engineering and Data Science MSc student.</p>
                    <a className='btn-type-one' href='#about'>Get to know me!</a>

                </div>
            </div>

            <footer className="footer">

                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

                <a href="https://www.linkedin.com/in/aksel-uhr/" className="fa fa-linkedin">  </a>
                <a href="https://www.facebook.com/aksel.uhr/" className="fa fa-facebook">  </a>
                <a href="https://www.instagram.com/akseluhr/" className="fa fa-instagram">  </a>
                <a href="https://github.com/Akseluhr" className="fa fa-github"></a>
            </footer>
            <div className='navPin'></div>
        </div>
    )
}

export default IndexView