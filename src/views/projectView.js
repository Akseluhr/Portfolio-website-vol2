import React from 'react'
import 'animate.css';
import ProjectCard from '../components/projectCard';
import { useState, useEffect } from 'react'

const ProjectView = () => {
        const [projectArray, setProjects] = useState([])
        const [isLoading, setIsLoading] = useState(false)
        const [err, setErr] = useState('')
    
        useEffect(() => {
            setIsLoading(true);
            fetch('https://api.github.com/users/akseluhr/starred')
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    
                    setData(data)

                })
                .catch(err);
        }, []);
    
        const setData = ( data 

        ) => {


            setProjects(data)
            console.log(data)
            setIsLoading(false);
    

        };
    return (
        <div>

            <div className='thirdView'>

                {projectArray.map( ({name, description, html_url, id, language}) => <ProjectCard key={id}title={name} language={'Language: ' + language} description={description}/>)}
                
            </div>


        </div>
    )
}

export default ProjectView