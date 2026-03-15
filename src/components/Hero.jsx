import React from "react";
import hero from "../assets/hero.jpeg";

function Hero() {
return (
    <section  id="home"
    className="hero" style={{backgroundImage: `url(${hero})`}}>
    <div className="hero-content">
        <h1>Building Materials You Can Trust</h1>

        <p>
        Annamalaiyar Traders supplies premium cement and steel
        products for construction projects across Tamil Nadu.
        </p>
        <a href="#products">
        <button  >Explore Products</button>
        </a>
    </div>
    </section>
);
}

export default Hero;