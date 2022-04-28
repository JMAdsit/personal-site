import React from "react";

function ProjectCard() {
    
    let title = "Example";
    let description = "This is an imaginary thing.";

    let html = "https://www.duckduckgo.com";
    let linkText = "This goes somewhere.";

    return (
    <div className="card rounded border border-primary my-3 mx-auto">

        <div className="card-header">
            <h2 className="card-title text-center">
                {title}
            </h2>
        </div>

        <div className="card-body">
            
            <p className="card-text">
                {description}
            </p>

            <div className="text-right">
                <a
                className="btn btn-secondary"
                href={html} 
                target="_blank" 
                rel="noreferrer">
                    {linkText}
                </a>
            </div>
        </div>
    </div>);
}

export default ProjectCard;