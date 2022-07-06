import { Button } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import gitHubPic from "../images/githubPic.png"
import { useState, useEffect } from 'react'


/* TODO: Reneder multiple cards here or in presenter? */
const ProjectCard = (props) => {

    const[isPressed, setIsPressed] = useState(false)

    const showDesciption = () => {
        console.log('kom hit')
        setIsPressed(isPressed => !isPressed)
    }
    useEffect(() => {
        console.log(isPressed)
    }, [isPressed])
    return (
        <div className='projectCard'>
             <img src={gitHubPic} className='gitHubPic'></img>
                    <h2>{props.title}</h2>
                    <hr className='cardHr'></hr>
                    <p className='cardText'>
                        {props.language === "Language: Jupyter Notebook" ? "Language: Python" : props.language}
                    </p>

                    <div className={`cardDescription ${isPressed ? 'cardDescription-show' : 'cardDescription'}`}>
                    <hr className='cardHr'></hr>
                    <p className='cardP'>
                        {props.description}
                    </p>
                    </div>
                    <button className='btn-type-two' onClick={showDesciption}>{isPressed ? 'Close' : 'Summary'}</button>
        </div>
    );
}
export default ProjectCard