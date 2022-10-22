import React from "react";
import "animate.css";
import ProjectCard from "../components/projectCard";
import { useState, useEffect } from "react";

const ProjectScreen = () => {
  const [projectArray, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      fetch("https://api.github.com/users/akseluhr/starred")
        .then((res) => res.json())
        .then((res) => {
          setData(res);
        })
        .catch((error => {
          return error
        }));
    };
    fetchData();
  }, []);

  const setData = (data) => {
    setProjects(data);
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
