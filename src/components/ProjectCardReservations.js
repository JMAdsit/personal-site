import React from "react";

function ProjectCardReservation() {

    let title = "Restaurant Reservation System";
    let description = "A restaurant reservation system built with React, Bootstrap, Node, Express, Knex, and PostgreSQL.";
    
    let deployHTML = "https://jma-reservation-client.herokuapp.com/dashboard";
    let deployText = "Deployment";

    let gitHTML = "https://github.com/JMAdsit/restaurant-reservation";
    let gitText = "Github";

    
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
                className="btn btn-primary"  
                href={deployHTML} 
                target="_blank" 
                rel="noreferrer">
                    {deployText}
                </a>

                <a
                className="btn btn-secondary"
                href={gitHTML} 
                target="_blank" 
                rel="noreferrer">
                    {gitText}
                </a>
            </div>
        </div>
    </div>);
}

export default ProjectCardReservation;