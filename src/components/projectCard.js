import { Button } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
//import gitHub from "../img/githubPic.png"
const buttontext = "PROJECTS"

/* TODO: Reneder multiple cards here or in presenter? */
const ProjectCard = (props) => {
    return (
        <div class='projectCard'>
                    <h2>Card Title</h2>
                    <p className='cardText'>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </p>
                    <button className='btn-type-two'>Details</button>
        </div>
    );
}
export default ProjectCard