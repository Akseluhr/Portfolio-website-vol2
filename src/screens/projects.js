import React from "react";
import "animate.css";
import ProjectCard from "../components/projectCard";
import { useState, useEffect } from "react";

const ProjectScreen = () => {
  const [projectArray, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setError] = useState("");

  useEffect(() => {
    const fetchData = () => {
      setIsLoading(true);
      fetch("https://api.github.com/users/akseluhr/starred")
        .then((res) => res.json())
        .then((res) => {
          setData(res);
        })
        .catch((error => {
            setError("Unable to get projects. Try again later")
        }));
    };
    fetchData();
  }, []);

  const setData = (data) => {
    setProjects(data);
    setIsLoading(false);
  };
  return (
    <div className="thirdView">
      <div className="scrollableDiv">
        {projectArray &&
          projectArray.map(({ name, description, html_url, id, language }) => (
            <ProjectCard
              key={id}
              title={name}
              language={"Language: " + language}
              description={description}
              url={html_url}
            />
          ))}
      </div>
      <a className="btn-type-one" href="#contact">
        Contact
      </a>
    </div>
  );
};

export default ProjectScreen;
