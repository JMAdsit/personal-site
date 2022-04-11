import React from "react";
import MainCard from "../components/MainCard";

function Home() {
    let title = "Home";
    let body = "Home page stuff.";

    return <MainCard 
        title={title}
        body={body}
    />
}

export default Home;