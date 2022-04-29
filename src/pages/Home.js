import React from "react";
import MainCard from "../components/MainCard";

function Home() {
    let title = "Home";
    let body = "Home page stuff.";

    return (
        <div className="d-flex flex-column justify-content-center">
            <MainCard 
                title={title}
                body={body}
            />
        </div>
    );
}

export default Home;