import React from "react";

function MainCard({title, body}) {
    return <div className="card">
        <div className="card-body">
            <h2 className="card-title">
                {title}
            </h2>
            <p className="card-text">
                {body}
            </p>
        </div>
    </div>
}

export default MainCard;