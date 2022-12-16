import React, { useEffect } from "react";
import logo from '../components/footer';

function About() {
    useEffect(() => {
        document.title = "Home";
    }, []);

    return (
        <div className="container">
            <h1>About us!</h1>
            <hr />
            <p>
           You can contact us!<br/><br/>
            </p>
        </div>
    );
}

export default About;