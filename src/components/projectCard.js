import GithubIcon from '../images/github.svg';
const ProjectCard = (props) => {
  return (
    <div className="projectCard">
    <div className='cardFlex'>
        <h2>{props.title} </h2>
        <img alt="github icon" className="github" src={GithubIcon}></img>
    </div>
      <hr className="cardHr"></hr>
      <div className="cardFlex2">
        <p className="cardLanguage">
          {props.language === "Language: Jupyter Notebook"
            ? "Language: Python"
            : props.language}
        </p>

        <a href={props.url} className="btn-type-two">
          Go To Repository
        </a>
      </div>

      <hr className="cardHr"></hr>
      <p className="cardDescription">{props.description}</p>
    </div>
  );
};
export default ProjectCard;
