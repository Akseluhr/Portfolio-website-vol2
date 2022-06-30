import React from 'react'
import 'animate.css';

const IndexView = () => {
    return (
        <div>
            <div>
                <nav>
                    <ul className='navbar'>
                        <li><a href="default.asp">ABOUT</a></li>
                        <li><a href="news.asp">PROJECTS</a></li>
                        <li><a href="contact.asp">CONTACT</a></li>
                    </ul>
                </nav>
            </div>
            <div className='firstView'>
                <div className='firstLeft'>

                    <h1 className='animate__animated animate__slideInUp'> aksel uhr.</h1>
                    <p className='pitch animate__animated animate__slideInUp'>Social and driven Software Engineering and Data Science MSc student.</p>
                    <button className='btn-type-one animate__animated animate__slideInUp'>Get to know me!</button>

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