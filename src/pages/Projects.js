import React from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectCardReservation from "../components/ProjectCardReservations";

function Projects() {

    return (
        <div className="d-flex flex-column justify-content-center">
            <ProjectCardReservation />

            <ProjectCard />
        </div>
    );
}

export default Projects;