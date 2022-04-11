import React from "react";
import MainCard from "../components/MainCard";

function About() {
    let title = "About Me";
    let body = "Things about me.";

    return <MainCard 
        title={title}
        body={body}
    />
}

export default About;