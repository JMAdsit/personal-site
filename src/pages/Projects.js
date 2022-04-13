import React from "react";
import ProjectCard from "../components/ProjectCard";

function Projects() {
    let exampleProject = {
        title: "Project",
        description: "This is a thing I did.",
        html: "https://www.duckduckgo.com",
        linkText: "This is a link."
    };

    return (
        <div>
            <ProjectCard 
            project={exampleProject} />
        </div>
    );
}

export default Projects;