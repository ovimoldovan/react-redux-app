import React from "react";
import {Link} from "react-router-dom";

const HomePage = () => (
    <div className="jumbotron">
        <h1>Home Page</h1>
        <p>React Redux Test App</p>
        <Link to="about" className = "btn btn-primary btn-lg">
            Learn more
        </Link>
    </div>
);

export default HomePage;