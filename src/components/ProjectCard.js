import React from "react";

function ProjectCard({title, body, link}) {
    return (
    <div className="card">
        <div className="card-body">
            <h2 className="card-title">
                {title}
            </h2>
            <p className="card-text">
                {body}
            </p>
            <a href={link.html} >{link.text}</a>
        </div>
    </div>);
}

export default ProjectCard;