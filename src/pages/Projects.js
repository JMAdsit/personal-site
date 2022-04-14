import React from "react";
import ProjectCard from "../components/ProjectCard";

function Projects() {
    let exampleProject = {
        title: "Project",
        description: "This is a thing I did.",
        html: "https://www.duckduckgo.com",
        linkText: "This is a link."
    };

    let exampleTwo = {
        title: "Example",
        description: "This is an imaginary thing.",
        html: "https://www.duckduckgo.com",
        linkText: "This goes somewhere."
    }

    return (
        <div>
            <ProjectCard 
            project={exampleProject} />
            <ProjectCard
            project={exampleTwo} />
        </div>
    );
}

export default Projects;