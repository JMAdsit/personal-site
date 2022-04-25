import React from "react";

function ProjectCard() {
    
    let title = "Example";
    let description = "This is an imaginary thing.";

    let html = "https://www.duckduckgo.com";
    let linkText = "This goes somewhere.";

    return (
    <div className="card rounded border border-primary my-3 mx-auto">
        <div className="card-body">
            
            <h2 className="card-title">
                {title}
            </h2>

            <p className="card-text">
                {description}
            </p>

            <a
            className="btn btn-secondary"
            href={html} 
            target="_blank" 
            rel="noreferrer">
                {linkText}
            </a>
        </div>
    </div>);
}

export default ProjectCard;