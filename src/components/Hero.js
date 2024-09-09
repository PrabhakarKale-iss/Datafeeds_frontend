import React from "react";
import './css/Hero.css'

function Hero(){
    return (
        <section className="hero">
            <h1>Welcome to My Project</h1>
            <p>Streamline you workflow with our amazing app</p>
            <a href="#get-started" className="cta-button">Get Started</a>
        </section>
    )
}

export default Hero;