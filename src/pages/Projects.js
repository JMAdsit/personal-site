import React from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectCardReservation from "../components/ProjectCardReservations";

function Projects() {

    let exampleTwo = {
        title: "Example",
        description: "This is an imaginary thing.",
        html: "https://www.duckduckgo.com",
        linkText: "This goes somewhere."
    }

    return (
        <div>
            <ProjectCardReservation />

            <ProjectCard
            project={exampleTwo} />
        </div>
    );
}

export default Projects;