import React from "react";
import ProjectCard from "../components/ProjectCard";

function Projects() {
    let exampleName = "Project";
    let exampleDescription = "This is a thing I did.";
    let exampleLink = {
        html: "https://www.duckduckgo.com",
        text: "This is a link."
    };

    return (
        <div>
            <ProjectCard 
            title={exampleName} 
            body={exampleDescription} 
            link={exampleLink} />
        </div>
    );
}

export default Projects;