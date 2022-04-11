import React from "react";

function MainCard({title, body}) {
    return <div>
        <h2>
            {title}
        </h2>
        <p>
            {body}
        </p>
    </div>
}

export default MainCard;