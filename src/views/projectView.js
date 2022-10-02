import React from 'react'
import 'animate.css';
import ProjectCard from '../components/projectCard';
import { useState, useEffect } from 'react'

const ProjectView = () => {
        const [projectArray, setProjects] = useState([])
        const [isLoading, setIsLoading] = useState(false)
        const [err, setErr] = useState('')
    
        useEffect(() => {
            const fetchData = () => {
                setIsLoading(true);
                fetch('https://api.github.com/users/akseluhr/starred')
                    .then(res => res.json())
                    .then(res => {
                        console.log(res)
                        
                        setData(res)
    
                    })
                    .catch(err);
            }
            fetchData()
        }, []);
    
        const setData = ( data 

        ) => {


            setProjects(data)
            console.log(data)
            setIsLoading(false);
    

        };
    return (
        <div className='thirdView'>
            <div className='scrollableDiv'>

                {projectArray && projectArray.map( ({name, description, url, id, language}) => <ProjectCard key={id}title={name} language={'Language: ' + language} description={description} url={url}/>)}
                
            </div>


        </div>
    )
}

export default ProjectView