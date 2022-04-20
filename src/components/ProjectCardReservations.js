import React from "react";

function ProjectCardReservation() {

    let title = "Restaurant Reservation System";
    let description = "A restaurant reservation system built with React, Bootstrap, Node, Express, Knex, and PostgreSQL.";
    
    let deployHTML = "https://jma-reservation-client.herokuapp.com/dashboard";
    let deployText = "Deployment";

    let gitHTML = "https://github.com/JMAdsit/restaurant-reservation";
    let gitText = "Github";

    
    return (
    <div className="card">
        <div className="card-body">
            
            <h2 className="card-title">
                {title}
            </h2>

            <p className="card-text">
                {description}
            </p>

            <a 
            href={deployHTML} 
            target="_blank" 
            rel="noreferrer">
                {deployText}
            </a>

            <a 
            href={gitHTML} 
            target="_blank" 
            rel="noreferrer">
                {gitText}
            </a>
        </div>
    </div>);
}

export default ProjectCardReservation;