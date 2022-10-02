
import { useState, useEffect } from 'react'


/* TODO: Reneder multiple cards here or in presenter? */
const ProjectCard = (props) => {

    const[isPressed, setIsPressed] = useState(false)

    const showDesciption = () => {
        console.log('kom hit')
        setIsPressed(isPressed => !isPressed)
    }

    return (

        <div className='projectCard'>

                    <h2>{props.title}</h2>
                    <hr className='cardHr'></hr>
                    <div className='cardFlex'>
                        <p className='cardLanguage'>
            
                            {props.language === "Language: Jupyter Notebook" ? "Language: Python" : props.language}
                        </p>

                        <a href={props.url} className='btn-type-two'>Go To Repository</a>

                    </div>

                    <hr className='cardHr'></hr>
                    <p className='cardDescription'>
                        {props.description}
                    </p>
        </div>
    );
}
export default ProjectCard