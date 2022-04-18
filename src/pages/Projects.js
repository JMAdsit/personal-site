import React from "react";
import ProjectCard from "../components/ProjectCard";

function Projects() {
    let exampleProject = {
        title: "Restaurant Reservation System",
        description: "A restaurant reservation system built with React, Bootstrap, Node, Express, Knex, and PostgreSQL.",
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