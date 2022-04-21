import React from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectCardReservation from "../components/ProjectCardReservations";

function Projects() {

    return (
        <div className="d-md-flex">
            <ProjectCardReservation />

            <ProjectCard />
        </div>
    );
}

export default Projects;