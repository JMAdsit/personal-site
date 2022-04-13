import React from "react";

function ProjectCard({ project }) {
    return (
    <div className="card">
        <div className="card-body">
            
            <h2 className="card-title">
                {project.title}
            </h2>

            <p className="card-text">
                {project.description}
            </p>

            <a 
            href={project.html} 
            target="_blank" 
            rel="noreferrer">
                {project.linkText}
            </a>
        </div>
    </div>);
}

export default ProjectCard;